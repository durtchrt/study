package com.study.examples.database.batch.tdd;

import org.junit.*;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

/**
 * Created by james.boo on 2016. 11. 9..
 */
public class TestDBProperties {
	@Test
	public void test_read() {
		DBProperties m = new DBProperties("db.properties");
		assertThat(m.getDriverName(), is("org.h2.Driver"));
		assertThat(m.getUrl(), is("jdbc:h2:mem:test"));
		assertThat(m.getUser(), is("sa"));
		assertThat(m.getPassword(), is(""));
	}
}
