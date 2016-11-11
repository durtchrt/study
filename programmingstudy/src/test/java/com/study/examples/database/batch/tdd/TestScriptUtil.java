package com.study.examples.database.batch.tdd;

import org.junit.*;

import java.sql.*;
import java.util.*;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.*;


/**
 * Created by james.boo on 2016. 11. 9..
 */
public class TestScriptUtil {

	@Test
	public void testReadDdlScriptThenReadOk() throws SQLException, ClassNotFoundException {
		Optional<String> ddls = new ScriptUtil().readFile("ddl.sql");
		assertThat(ddls.get(), notNullValue());
	}

	@Test
	public void testReadDdlScriptPassEmptyPathThenReadFail() throws SQLException, ClassNotFoundException {
		Optional<String> ddls = new ScriptUtil().readFile("");
		assertThat(ddls.isPresent(), is(false));
	}

	@Test
	public void testReadDdlScriptUnkownPathThenReadFail() throws SQLException, ClassNotFoundException {
		Optional<String> ddl = new ScriptUtil().readFile("xxx");
		assertThat(ddl.isPresent(), is(false));
	}

	@Test
	public void testSplitScriptMethodReadFAil() throws SQLException, ClassNotFoundException {
		Optional<List<String>> s1 = ScriptUtil.splitScript(Optional.of(""));
		Optional<List<String>> s2 = ScriptUtil.splitScript(Optional.ofNullable(null));
		assertThat(s1.isPresent(), is(false));
		assertThat(s2.isPresent(), is(false));
	}

	@Test
	public void testSplitScriptMethodReadOk() throws SQLException, ClassNotFoundException {
		Optional<List<String>> ddls = ScriptUtil.splitScript(Optional.of(";x; ;x;x; "));
		String[] split = ";x; ;x;x; ".split(";");
		List<String> scripts = ddls.get();
		assertThat(split.length, is(6));
		assertThat(scripts.size(), is(3));
	}

	@Test
	public void testRead() {
		Optional<List<String>> sqls = ScriptUtil.read("ddl.sql");
		assertThat(sqls.get().size(), is(2));
	}


}
