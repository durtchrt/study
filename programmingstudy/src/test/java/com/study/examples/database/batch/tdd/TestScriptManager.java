package com.study.examples.database.batch.tdd;

import com.study.examples.database.batch.tdd.enums.*;
import com.study.examples.database.batch.tdd.vo.*;
import org.junit.*;

import java.sql.*;
import java.util.*;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

/**
 * Created by james.boo on 2016. 11. 9..
 */
public class TestScriptManager {
	static ScriptManager m;
	public TestScriptManager() {
		JDBCManager jdbcManager = new JDBCManager("org.h2.Driver");
		jdbcManager.makeConnection("jdbc:h2:mem:test", "sa", "");
		m = new ScriptManager(jdbcManager);
		Optional<List<String>> ddlSqls = ScriptUtil.read("ddl.sql");
		m.runAllDDLScript(ddlSqls);
	}

	@Test(expected = RuntimeException.class)
	public void test_runScript_passEmptyStringThenThrowRuntimeException() {
		Optional<SqlResult> r = m.runScript("");
	}

	@Test(expected = RuntimeException.class )
	public void test_sqlTypeCheck_passWrongSqlThenRunTimeException() {
		SqlType t1 = m.sqlTypeCheck("iii ");
	}

	@Test
	public void test_sqlTypeCheck() {
		SqlType t1 = m.sqlTypeCheck("select * from ");
		SqlType t2 = m.sqlTypeCheck("insert * from ");
		SqlType t3 = m.sqlTypeCheck("update * from ");
		SqlType t4 = m.sqlTypeCheck("delete * from ");
		SqlType t5 = m.sqlTypeCheck("create * from ");
		SqlType t6 = m.sqlTypeCheck("drop * from ");
		SqlType t7 = m.sqlTypeCheck("alter * from ");
		SqlType t8 = m.sqlTypeCheck("truncate * from ");

		assertThat(t1, is(SqlType.SELECT));
		assertThat(t2, is(SqlType.DML));
		assertThat(t3, is(SqlType.DML));
		assertThat(t4, is(SqlType.DML));
		assertThat(t5, is(SqlType.DDL));
		assertThat(t6, is(SqlType.DDL));
		assertThat(t7, is(SqlType.DDL));
		assertThat(t8, is(SqlType.DDL));
	}

	@Test(expected = RuntimeException.class)
	public void test_runDDLScript_emptySqlThenRuntimeException() {
		m.runDDLScript("");
	}

	@Test
	public void test_runDDLScript() {
		Optional<List<String>> sqls = ScriptUtil.read("ddl.sql");
		Optional<SqlResult<Boolean>> o = m.runDDLScript(sqls.get().get(0));
		SqlResult<Boolean> r = o.get();
		assertThat(r.getResult(), is(true));
	}

	@Test
	public void test_runAllDDLScript() {
		Optional<List<String>> sqls = ScriptUtil.read("ddl.sql");
		Optional<List<SqlResult<Boolean>>> r = m.runAllDDLScript(sqls);
		List<SqlResult<Boolean>> list = r.get();
		list.forEach( x -> {
			assertThat(x.getResult(), is(true));
		});
	}

	@Test
	public void test_runDMLScript() throws SQLException {
		Optional<List<String>> sqls = ScriptUtil.read("dml.sql");
		assertThat(sqls.get().size(), is(50));

		Optional<List<SqlResult<Integer>>> r = m.runDMLScript(sqls);
		assertThat(r.get().size(), is(50));
	}

	@Test
	public void test_runDMLScriptWithDMLCountAndInterval() {

	}

	@AfterClass
	public static void closeConnection() {
		m.close();
	}

}
