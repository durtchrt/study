package com.programming.study.toby.p20161120.p7;

import java.util.function.*;

public class IntersectionType {

	interface Hello extends Function {  // <----- Function을 상속. 추상메서드가 갯수로는 2개지만 컴파일러가 리듀스하면서 알아서 한개로 인식; 잘 동작
		default void hello() {
			System.out.println("Hello");
		}
	}

	interface Hi {
		default void hi() {
			System.out.println("Hi");
		}
	}

	interface Printer {
		default void printer() {
			System.out.println("Printer");
		}
	}

	public static void main(String[] args) {
		run((Function & Hello & Hi & Printer) s->s, o -> {
			o.hello();
			o.hi();
			o.printer(); // printer 메서드가 손쉽게 추가됨
		});
	}

	private static <T extends Function> void run(T t, Consumer<T> c) {
		c.accept(t);
	}
}
