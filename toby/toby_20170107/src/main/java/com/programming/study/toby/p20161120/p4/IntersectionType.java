package com.programming.study.toby.p20161120.p4;

import java.io.*;
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
		hello((Function & Hello & Hi) s->s);
		//callback 방식으로 변경
	}

	private static <T extends Function & Hello & Hi > void hello(T t) {
		t.hello();
		t.hi();
	}
}
