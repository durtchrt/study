package com.programming.study.toby.p20161105.p01.p01.typetoken;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class TypeToken6 {

	static class TypesafeMap {
		Map<Class<?>, Object> map =  new HashMap<>();
		//clazz vs klass
		void put(Class<?> clazz, Object value) { // clazz  toby 선호
//			void put(Class<?> klass) {
			map.put(clazz, value);
		}
	}


	public static void main(String[] args) throws InstantiationException, IllegalAccessException {
		TypesafeMap m = new TypesafeMap();
		m.put(Integer.class, "Value");

	}
}
