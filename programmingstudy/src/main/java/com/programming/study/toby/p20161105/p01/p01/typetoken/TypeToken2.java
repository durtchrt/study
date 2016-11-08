package com.programming.study.toby.p20161105.p01.p01.typetoken;

/**
 * Created by james.boo on 2016. 11. 7..
 */
// 학습주제:  generic type paramter를 사용해서 코드를 작성하는 것
public class TypeToken2 {

	static <T> T create(Class<T> clazz) throws IllegalAccessException, InstantiationException {
		return clazz.newInstance();
	}

	public static void main(String[] args) throws InstantiationException, IllegalAccessException {
		String o = create(String.class);
		System.out.println(args.getClass());

//		Integer integer = create(Integer.class);
//		System.out.println(args.getClass()); //  java.lang.InstantiationException: java.lang.Integer
//											// Integer는 기본 생성자가 없어서 생기는 문제( 인자를 0개받는 생성자)


	}
}
