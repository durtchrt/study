package com.programming.study.toby.p161029.dispatch.p02.dynamicdispatch;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 4..
 */
public class DynamicDispatch {

	static abstract class Service {
		abstract void run();
	}

	static class MyService1 extends Service {
		@Override
		void run() {
			System.out.println("run1");
		}
	}


	static class MyService2 extends Service {
		@Override
		void run() {
			System.out.println("run2");
		}
	}


	public static void main(String[] args) {
		Service svc = new MyService1();
		svc.run(); // receiver paramter - MySerivce1, MyService2을 가리키는 것을 결정
					// 자바는 single receiver parameter(= 객체를 가리키는 변수를 의미)
					// 자바는 single dispatcher만 허용

		List<Service> services = Arrays.asList(new MyService1(), new MyService2());
//		services.forEach((Service s) -> s.run());
//		services.forEach(s -> s.run());
		services.forEach(Service::run); // method reference - 하단 주석 참조
		// Service 타입이 반복문에서 런타임에 dynamic dispatch 발생(MyService1, MyService2 동적으로 결정)
		/***
		Method Signature vs Method Type
		- Method signature: parameter name, parameter list, method overloading 기준, override는 체킹을하네(?? - 방송에서 covariance와 연관된다고함.) - return type은 메소드시그네처가 아니다.
		- Method type : return type, method type types, method argument types, exception  => Method Reference
		***/


	}
}
