package com.study.examples.database.batch.tdd;

public class RunManagerFactory {
	public static RunManager create(String propertiesPath) {
		DBProperties p = new DBProperties(propertiesPath);
		JDBCManager jdbcManager = new JDBCManager(p.getDriverName());
		jdbcManager.makeConnection(p.getUrl(), p.getUrl(), p.getPassword());
		return new RunManager(new ScriptManager(jdbcManager));
	}
}
