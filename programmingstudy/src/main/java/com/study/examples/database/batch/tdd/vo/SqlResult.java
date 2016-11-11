package com.study.examples.database.batch.tdd.vo;

import com.study.examples.database.batch.tdd.enums.*;

public class SqlResult<T> {

	public SqlResult(SqlType type, String sql, T result) {
		this.type = type;
		this.sql = sql;
		this.result = result;
	}

	SqlType type;
	String sql;
	T result;

	public SqlType getType() {
		return type;
	}

	public void setType(SqlType type) {
		this.type = type;
	}

	public String getSql() {
		return sql;
	}

	public void setSql(String sql) {
		this.sql = sql;
	}

	public T getResult() {
		return result;
	}

	public void setResult(T result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "SqlResult{" +
			"type=" + type +
			", sql='" + sql + '\'' +
			", result=" + result +
			'}';
	}
}
