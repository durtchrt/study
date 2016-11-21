package com.programming.study.toby.p20161119.p01.live;

import java.util.*;

public class Generics {

	static class Hello<T> {
//		T t;
//		T method(T t) {
//			return null;
//		}
	}
	static void print(String value) {
		System.out.println(value);
	}

	public static void main(String[] args) {
		new Hello<String>(); // type argument
		// input -> argument
		// define -> parameter

		List list = Arrays.asList(1,2,3);
		list.add(1);
//		list.add("4");
	}
}
