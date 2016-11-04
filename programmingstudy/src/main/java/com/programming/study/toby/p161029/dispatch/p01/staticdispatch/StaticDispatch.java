package com.programming.study.toby.p161029.dispatch.p01.staticdispatch;

/**
 * Created by james.boo on 2016. 11. 4..
 */
public class StaticDispatch {

	static class Service {
		void run(int number) {
			System.out.println("run(" + number + ")");
		}

		void run(String msg) {
			System.out.println("run(" + msg + ")");
		}
	}

	public static void main(String[] args) {
		// 컴파일 타임에 타입 체킹을해서 Dispatch를 해서 static dispatch
		new Service().run(1);
		new Service().run("DynamicDispatch");
	}
}
