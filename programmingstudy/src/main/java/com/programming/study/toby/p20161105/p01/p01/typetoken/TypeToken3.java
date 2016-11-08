package com.programming.study.toby.p20161105.p01.p01.typetoken;

/**
 * Created by james.boo on 2016. 11. 7..
 */
// 학습주제:  generic type paramter를 사용해서 코드를 작성하는 것
public class TypeToken3 {
	static class Generic<T> { // T를 타입파라메터, 타입변수
		T value;
		void set(T t) {}
		T get() { return null; }
	}

	public static void main(String[] args) throws InstantiationException, IllegalAccessException {
		Generic<String> s = new Generic<String>();
		// 파라메터화된타입(parameterized type): 제네릭으로 선언된 타입.
		s.value = "string";

		Generic<Integer> i = new Generic<Integer>();
		i.value = 1;
		i.set(10);

	}
}
