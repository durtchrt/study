package com.study.examples.database.batch;

import com.study.examples.database.batch.tdd.*;
import com.study.examples.database.batch.tdd.vo.*;

import java.util.*;

public class TDDMain {
	public static void main(String[] args) {
		try(RunManager m = RunManagerFactory.create("db.properties")) {
			Optional<List<String>> ddl = ScriptUtil.read("ddl.sql");
			Optional<List<SqlResult<Boolean>>> ddlResults = m.runDDL(ddl);

			Optional<List<String>> dml = ScriptUtil.read("dml.sql");
			Optional<List<List<String>>> splitSqls = m.createSplitSqls(dml);
			Optional<List<Optional<List<SqlResult<Integer>>>>> dmlResults = m.runDML(splitSqls);

			System.out.println(ddlResults.get());

			dmlResults.get().forEach(x ->
				System.out.println(x.get())
			);
		}
	}
}
