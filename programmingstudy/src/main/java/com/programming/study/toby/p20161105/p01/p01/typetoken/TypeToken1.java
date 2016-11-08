package com.programming.study.toby.p20161105.p01.p01.typetoken;

/**
 * Created by james.boo on 2016. 11. 7..
 */
// 학습주제:  generic type paramter를 사용해서 코드를 작성하는 것
public class TypeToken1 {

	static Object create() {
		return new Object();
	}

	public static void main(String[] args) {
		Object o = create();
		System.out.println(args.getClass());
	}
}
