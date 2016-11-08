package com.programming.study.toby.p20161105.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken5 {

	static class TypesafeMap {
		Map<Class<?>, Object> map = new HashMap<>();

		<T> void put(Class<T> clazz, T value) {
			map.put(clazz, value);
		}

		<T> T get(Class<T> clazz) {
			return clazz.cast(map.get(clazz));
		}
	}

	static class TypeReference<T> {
		Type type;

		public TypeReference() {
			Type stype = getClass().getGenericSuperclass();
			if (stype instanceof ParameterizedType) {
				this.type = ((ParameterizedType)stype).getActualTypeArguments()[0];
			} else throw new RuntimeException();
		}
	}

	public static void main(String[] args) throws NoSuchFieldException {
//		TypeReference t = new TypeReference();
//		System.out.println(t); // RuntimeExceptin 발생

		TypeReference t = new TypeReference<String>() {};
		System.out.println(t.type);



	}
}
