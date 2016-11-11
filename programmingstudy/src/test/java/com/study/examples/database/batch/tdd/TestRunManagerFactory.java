package com.study.examples.database.batch.tdd;

import org.junit.*;

import static org.hamcrest.core.IsNull.notNullValue;
import static org.junit.Assert.assertThat;

/**
 * Created by james.boo on 2016. 11. 9..
 */
public class TestRunManagerFactory {
	@Test
	public void test() {
		RunManager r = RunManagerFactory.create("db.properties");
		assertThat(r, notNullValue());
	}
}
