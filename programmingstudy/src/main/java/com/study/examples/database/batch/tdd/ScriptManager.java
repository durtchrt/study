package com.study.examples.database.batch.tdd;

import com.study.examples.database.batch.tdd.enums.*;
import com.study.examples.database.batch.tdd.vo.*;

import java.sql.*;
import java.util.*;

public class ScriptManager implements AutoCloseable {
	JDBCManager m ;

	public ScriptManager(JDBCManager m) {
		this.m =  m;
	}

	public Optional<SqlResult> runScript(String sql) {
		if("".equals(sql)) {
			throw new RuntimeException("runScript's argument passed empty string.");
		}
		SqlType sqlType = sqlTypeCheck(sql);

		return Optional.empty();
	}

	public SqlType sqlTypeCheck(String sql) {

		String[] s = sql.toLowerCase().trim().split(" ");
		if(s.length >= 1) {
			String q = s[0];
			SqlType t;
			switch (q) {
				case "select": t = SqlType.SELECT; break;
				case "insert": t = SqlType.DML; break;
				case "update": t = SqlType.DML; break;
				case "delete": t = SqlType.DML; break;
				case "create": t = SqlType.DDL; break;
				case "alter": t = SqlType.DDL; break;
				case "drop": t = SqlType.DDL; break;
				case "truncate": t = SqlType.DDL; break;
				default: throw new RuntimeException("unkown sql type");
			}
			return t;
		}

		throw new RuntimeException("sqlTypeCheck");
	}

	public Optional<List<SqlResult<Boolean>>> runAllDDLScript(Optional<List<String>> sqls) {
		String sql = "";
		if(sqls.isPresent()) {
			List<String> sqlList = sqls.get();
			List<SqlResult<Boolean>> resultList = new ArrayList<>();
			sqlList.forEach( x -> {
				Optional<SqlResult<Boolean>> r = this.runDDLScript(x);
				if(r.isPresent()) {
					resultList.add(r.get());
				}
			});
			return Optional.of(resultList);
		} else {
			throw new RuntimeException("dml sql is invalid.");
		}
	}


	public Optional<SqlResult<Boolean>> runDDLScript(String sql) {
		if(sql == null || sql.trim().equals("")) {
			throw new RuntimeException("run script: sql is empty. ");
		}
		Connection conn = m.getConn();
		try (Statement stmt = conn.createStatement()) {
			stmt.execute(sql);
			return Optional.of(new SqlResult<>(SqlType.DDL, sql, true));
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return Optional.of(new SqlResult<>(SqlType.DDL, sql, false));
	}

	@Override
	public void close() {
		m.close();
	}

	public Optional<List<SqlResult<Integer>>> runDMLScript(Optional<List<String>> sqls) {
		if(sqls.isPresent()) {
			List<String> sqlList = sqls.get();
			Connection conn = m.getConn();
			try {
				conn.setAutoCommit(false);
				Statement stmt = conn.createStatement();
				List<SqlResult<Integer>> list = new ArrayList<>();

				sqlList.forEach( x -> {
					try {
						stmt.addBatch(x);
						list.add(new SqlResult<Integer>(SqlType.DML, x, 0));

					} catch (SQLException e) {
						e.printStackTrace();
						throw new RuntimeException("runDMLScript : invalid sql\n" + x );
					}
				});

				int[] results = stmt.executeBatch();
				if(results.length != list.size()) {
					conn.rollback();
					conn.setAutoCommit(true);
					throw new SQLException("dml count and result count is not same.");
				}
				for(int i = 0; i < results.length; i++) {
					list.get(i).setResult(results[i]);
				}
				conn.commit();
				conn.setAutoCommit(true);
				return Optional.of(list);
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return Optional.empty();
	}
}

interface SqlRunable<T> {
	T run(String sql);
}