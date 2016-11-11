package com.study.examples.database.batch.tdd;

import java.sql.*;
import java.util.*;

public class JDBCManager implements AutoCloseable {
	private Connection conn;

	public Connection getConn() {
		return conn;
	}

	public JDBCManager(String driverName) {
		try{
			Class.forName(driverName);
		} catch(ClassNotFoundException e) {
			throw new RuntimeException(e.getCause());
		}
	}

	public JDBCManager makeConnection(String url, String user, String password) {
		try{
			this.conn = DriverManager.getConnection(url, user, password);
		}catch(SQLException e) {
			throw new RuntimeException(e.getCause());
		}
		return this;
	}


	@Override
	public void close() {
		if(this.conn == null) {
			return;
		}
		try {
			this.conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(this.conn != null) {
				try {
					this.conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}
