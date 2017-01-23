package com.programming.study.toby.p20161126.p01;

import java.util.*;
import java.util.function.*;

public class Main01 {
	// What is Reactive
	// ReactiveX - RX - Reactive Extension
	// FRP(Functional Reactive Programming) 70~80대 이미 만들어져있는 개념.
	// Reactive쪽은 용어 사용시에 주의해야함.
	// FRP란 단어 자체 사람마다 생각이 다를수가 있다
	// RFP라고 부르자고 제안함
	// 이벤트나 무엇이든 발생하면 거기에 대응하는 코드를 만드는 것

	// Eric Meyer RX를 설명할 때 요놈을 꺼냄 -> Duality(쌍대성)
	// Observable <-> Iterable
	// Push       <-> Pull
	// Reactive Streams: java에서 표준, JAVA9 API에 들어감

	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
		// List > Collection > Iterable
		// Iterable - Implementing this interface allows an object to be the target of the "foreach" statement.

		//foreach
		Iterable<Integer> iter = Arrays.asList(1, 2, 3, 4, 5);
		for (Integer i : iter) {
			System.out.println(i);
		}

		Iterable<Integer>  iter2 = () -> new Iterator<Integer>() {
			int i = 0;
			final static int MAX = 10;
			@Override
			public boolean hasNext() {
				return i < MAX;
			}

			@Override
			public Integer next() {
				return ++i;
			}
		};

		// for-each java 5 이후 지원
		for (Integer i : iter2) {
			System.out.println(i);
		}
		// java 5 이전
		for(Iterator<Integer> it = iter2.iterator(); it.hasNext();) {
			Integer i = it.next(); // 받는쪽에서 데이터를 땡껴옴(Pull)
			System.out.println(i);
		}
	}
}
