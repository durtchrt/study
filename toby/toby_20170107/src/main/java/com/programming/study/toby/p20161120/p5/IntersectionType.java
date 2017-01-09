package com.programming.study.toby.p20161120.p5;

import java.util.function.*;

public class IntersectionType {

	interface Hello {
		default void hello() {
			System.out.println("Hello");
		}
	}

	interface Hi {
		default void hi() {
			System.out.println("Hi");
		}
	}

	public static void main(String[] args) {
		run((Function & Hello & Hi) s->s, o -> { // !!! 선언부에서는 & Hello & Hi가 없어도 동작
			o.hello();
			o.hi();
		});
	}

	//	private static <T extends Function & Hello & Hi> void run(T t, Consumer<T> c) {
	private static <T extends Function> void run(T t, Consumer<T> c) {
		c.accept(t);
	}
}
