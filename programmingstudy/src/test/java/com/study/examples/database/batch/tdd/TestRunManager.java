package com.study.examples.database.batch.tdd;

import com.study.examples.database.batch.tdd.vo.*;
import org.junit.*;

import java.util.*;

import static org.hamcrest.core.Is.*;
import static org.junit.Assert.*;

/**
 * Created by james.boo on 2016. 11. 9..
 */
public class TestRunManager {

	static RunManager m;

	public TestRunManager() {
		ScriptManager sm;
		JDBCManager jdbcManager = new JDBCManager("org.h2.Driver");
		jdbcManager.makeConnection("jdbc:h2:mem:test", "sa", "");
		sm = new ScriptManager(jdbcManager);
		Optional<List<String>> ddlSqls = ScriptUtil.read("ddl.sql");
		sm.runAllDDLScript(ddlSqls);
		this.m = new RunManager(sm);
	}

	@Test
	public void test_createSplitSqls() {
		Optional<List<String>> sqls = ScriptUtil.read("dml.sql");
		Optional<List<List<String>>> r = m.createSplitSqls(sqls, 10);
		assertThat(r.get().size(), is(5));
	}

	@Test
	public void test_runDML() {
		Optional<List<String>> sqls = ScriptUtil.read("dml.sql");
		Optional<List<List<String>>> s = m.createSplitSqls(sqls);
		Optional<List<Optional<List<SqlResult<Integer>>>>> r = m.runDML(s);
		assertThat(r.get().size(), is(1));
		assertThat(r.get().get(0).get().size(), is(50));
	}

	@Test
	public void test_runDMLScriptWithDMLCountAndInterval() {
		Optional<List<String>> sqls = ScriptUtil.read("dml.sql");
		Optional<List<List<String>>> s = m.createSplitSqls(sqls, 10);
		Optional<List<Optional<List<SqlResult<Integer>>>>> r = m.runDML(s);
		assertThat(r.get().size(), is(5));
		assertThat(r.get().get(0).get().size(), is(10));
	}

	@Test
	public void test_runDMLWithInterval() {
		Optional<List<String>> sqls = ScriptUtil.read("dml.sql");
		Optional<List<List<String>>> s = m.createSplitSqls(sqls, 10);
		long start = System.currentTimeMillis();
		Optional<List<Optional<List<SqlResult<Integer>>>>> r = m.runDML(s, 100);
		long end = System.currentTimeMillis();
		long totalTime = end - start;
		assertThat(totalTime > 500, is(true));
		assertThat(r.get().size(), is(5));
	}

	@Test
	public void test_runDDL() {
		Optional<List<String>> sqls = ScriptUtil.read("dml.sql");
		Optional<List<SqlResult<Boolean>>> r = m.runDDL(sqls);
	}

	@AfterClass
	public static void closeConnection() {
		m.close();
	}

}
