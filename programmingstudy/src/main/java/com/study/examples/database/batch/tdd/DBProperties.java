package com.study.examples.database.batch.tdd;

import java.io.*;
import java.util.*;

public class DBProperties {

	private String driverName;
	private String url;
	private String user;
	private String password;

	public DBProperties(String filename) {
		InputStream is = getClass().getClassLoader().getResourceAsStream(filename);
		if(is == null) {
			throw new RuntimeException("invalid properties");
		}
		Properties prop = new Properties();
		try {
			prop.load(is);
		} catch (IOException e) {
			e.printStackTrace();
		}
		this.driverName = prop.getProperty("driverName");
		this.url = prop.getProperty("url");
		this.user = prop.getProperty("user");
		this.password = prop.getProperty("password");
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
