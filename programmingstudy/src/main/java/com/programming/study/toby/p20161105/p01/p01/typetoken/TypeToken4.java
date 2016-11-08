package com.programming.study.toby.p20161105.p01.p01.typetoken;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class TypeToken4 {

	<T> T create(Class<T> clazz) throws IllegalAccessException, InstantiationException {
		return clazz.newInstance();
	}

	public static void main(String[] args) throws InstantiationException, IllegalAccessException {
		Object o = "string";
		Integer i = (Integer)o;
		System.out.println(i);
		//런타임 익셉션 발생 : java.lang.ClassCastException


	}
}
