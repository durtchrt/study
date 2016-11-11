package com.study.examples.database.batch.tdd;

import org.junit.*;

import java.sql.*;
import java.util.*;

import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;


/**
 * Created by james.boo on 2016. 11. 9..
 */
public class TestJDBCManager {

	@Test(expected = RuntimeException.class)
	public void testCreateInstanceJDBCManagerThenExpecttoClassNotFoundException() throws ClassNotFoundException {
		JDBCManager m = new JDBCManager("");
	}

	@Test
	public void testCreateInstanceJDBCManagerForH2() throws ClassNotFoundException {
		JDBCManager m = new JDBCManager("org.h2.Driver");
		assertThat(m, notNullValue());
	}

	@Test(expected = RuntimeException.class)
	public void testCreateConnectionForH2ThenExpectSQLException() throws SQLException, ClassNotFoundException {
		JDBCManager m = new JDBCManager("org.h2.Driver");
		m.makeConnection("", "", "");
	}


	@Test
	public void testCreateConnectionForH2() throws SQLException, ClassNotFoundException {
		JDBCManager m = new JDBCManager("org.h2.Driver").makeConnection("jdbc:h2:mem:test", "sa", "");
		assertThat(m.getConn(), notNullValue());
	}

	@Test
	public void testCloseConnection() throws SQLException, ClassNotFoundException {
		JDBCManager m = new JDBCManager("org.h2.Driver").makeConnection("jdbc:h2:mem:test", "sa", "");
		m.close();
		boolean isClosed = m.getConn().isClosed();
		assertThat(isClosed, is(true));
	}
}
