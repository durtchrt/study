package com.programming.study.toby.p20161105.supertypetoken.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken8 {

	static class TypesafeMap {
		Map<TypeReference<?>, Object> map = new HashMap<>();

		<T> void put(TypeReference<T> tr, T value) {
			map.put(tr, value);
		}

		<T> T get(TypeReference<T> tr) {
			return ((Class<T>)tr.type).cast(map.get(tr));
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

		@Override
		public boolean equals(Object o) {
			if (this == o) return true;
//			if (o == null || getClass() != o.getClass()) return false;
//			if (o == null || getClass() != o.getClass()) return false;
			if (o == null || getClass().getGenericSuperclass() != o.getClass()) return false;

			TypeReference<?> that = (TypeReference<?>) o;

			return type != null ? type.equals(that.type) : that.type == null;
		}

		@Override
		public int hashCode() {
			return type != null ? type.hashCode() : 0;
		}
	}

	public static void main(String[] args) throws NoSuchFieldException {
		TypesafeMap m = new TypesafeMap();
		TypeReference<Integer> trInt = new TypeReference<Integer>() { };
		TypeReference<String> trString = new TypeReference<String>() { };

		// 오류발생 - TypesafeMap에서는 Class 정보를 받는데 지금 넘겨주는건 parameterized type이기 때문에 다르다.
		// sun.reflect.generics.reflectiveObjects.ParameterizedTypeImpl cannot be cast to java.lang.Class
		// SuperTypeToken9에서 해결
		TypeReference<List<Integer>> trIntegerList = new TypeReference<List<Integer>>() { };
		TypeReference<List<String>> trStringList = new TypeReference<List<String>>() { };

		m.put(trInt, 1);
		m.put(trString, "String");
		m.put(trIntegerList, Arrays.asList(1,2,3));
		m.put(trStringList, Arrays.asList("1","2","3"));

		System.out.println(m.get(trInt));
		System.out.println(m.get(trString));
		System.out.println(m.get(trIntegerList));
		System.out.println(m.get(trStringList));
	}
}
