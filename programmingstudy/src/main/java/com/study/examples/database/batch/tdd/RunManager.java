package com.study.examples.database.batch.tdd;

import com.study.examples.database.batch.tdd.vo.*;

import java.util.*;

public class RunManager implements AutoCloseable {
	private final ScriptManager m;

	public RunManager(ScriptManager m) {
		this.m = m;
	}


	@Override
	public void close() {
		m.close();
	}

	public Optional<List<SqlResult<Boolean>>> runDDL(Optional<List<String>> sqls) {
		if(sqls.isPresent()) {
			return m.runAllDDLScript(sqls);
		}
		return Optional.empty();
	}

	public Optional<List<List<String>>> createSplitSqls(Optional<List<String>> sqls) {
		if(sqls.isPresent()) {
			List<String> sqlList = sqls.get();
			List<List<String>> result = new ArrayList<>();
			result.add(sqlList);
			return Optional.of(result);
		}
		return Optional.empty();
	}
	public Optional<List<List<String>>> createSplitSqls(Optional<List<String>> sqls, int count) {
		if(sqls.isPresent()) {
			List<String> sqlList = sqls.get();
			List<List<String>> result = new ArrayList<>();
			List<String> splitedSqlList = new ArrayList<>();
			for(String s : sqlList) {
				splitedSqlList.add(s);
				if(splitedSqlList.size() % count == 0) {
					result.add(splitedSqlList);
					splitedSqlList = new ArrayList();
				}
			}
			if(splitedSqlList.size() > 0) {
				result.add(splitedSqlList);
			}
			return Optional.of(result);
		}
		return Optional.empty();
	}

	public Optional<List<Optional<List<SqlResult<Integer>>>>> runDML(Optional<List<List<String>>> sqls) {
		return runDML(sqls, 0);
	}

	public Optional<List<Optional<List<SqlResult<Integer>>>>> runDML(Optional<List<List<String>>> sqls, int interval) {
		List<Optional<List<SqlResult<Integer>>>> resultList = new ArrayList<>();
		if(sqls.isPresent()) {
			List<List<String>> sqlList = sqls.get();
			sqlList.forEach( x -> {
				resultList.add( m.runDMLScript(Optional.of(x)) );//hmm.........
				if(interval > 0) {
					try {
						Thread.sleep(interval);
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			});
			return Optional.of(resultList);
		}
		return Optional.empty();
	}

//	public Optional<List<SqlResult<Integer>>> runSqlCountWithInterval(Optional<List<String>> sqls, int count, int interval) {
//		if(sqls.isPresent()) {
//			List<String> sqlList = sqls.get();
//			List<String> sList = new ArrayList<>();
//			for (int i = 0; i < sqlList.size(); i++ ) {
//				if( i != 0 && i % count == 0) {
//					m.runDMLScript(Optional.of(sList));
//
//				}
//				sList.add()
//			}
//		}

//		return null;
//	}
}
