package com.study.examples.database.batch.sample;

import java.sql.*;

public class JavaJDBCBatch {
	public static void main(String[] args) {
		String url = "jdbc:mysql://10.28.167.99:3306/chanel_dev?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
		String username = "chaneldev";
		String pw = "roqkf#!";
		try(Connection conn = DriverManager.getConnection(url, username, pw)) {
			Class.forName("com.mysql.cj.jdbc.Driver");

			long start = System.currentTimeMillis();

			try(Statement s = conn.createStatement()) {
				int i = s.executeUpdate("drop table content2");
				int i1 = s.executeUpdate("create table content2 like content");
				System.out.println("i: " + i);
				System.out.println("i1: " + i1);
				s.executeUpdate("insert into content2 select * from content");
				s.executeUpdate("alter table `content2` add column `approved_order` INT NOT NULL DEFAULT 0 AFTER `approved_at`");
			} catch (Exception e) {
				e.printStackTrace();
				return;
			}

			System.out.println("complete ddl: " + (System.currentTimeMillis() - start));

			start = System.currentTimeMillis();

			int totalCount = 0;
			while(true) {
				try (Statement s = conn.createStatement()) {
					int range = 10000;
					conn.setAutoCommit(false);
					String sql = String.format("update `content2` set approved_order = UNIX_TIMESTAMP(approved_at) * -1 where approved_order = 0 and approved_at is not null limit %d ", range);
					int count = s.executeUpdate(sql);
					conn.commit();
					if(count == 0) {
						break;
					}
					totalCount += count;
				}
				Thread.sleep(1);
			}

			System.out.println("complete dml: " + (System.currentTimeMillis() - start));
			System.out.println("updated row's total count is " + totalCount);

		} catch (SQLException e) {
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}

