package com.programming.study.toby.p20161105.p02.spring;

/**
 * Created by james.boo on 2016. 11. 8..
 */
public class User {
	String name;

	public User() { }

	public User(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "User{" +
			"name='" + name + '\'' +
			'}';
	}
}
