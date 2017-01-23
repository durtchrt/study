package com.programming.study.toby.p20161105.supertypetoken.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken7 {

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
		TypeReference<Integer> trInt = new TypeReference<Integer>() {
		};
		m.put(trInt, 1);
		TypeReference<String> trString = new TypeReference<String>() {
		};
		m.put(trString, "String");
		TypeReference<List> trList = new TypeReference<List>() {
		};
		m.put(trList, Arrays.asList(1,2,3));

		System.out.println(m.get(trInt));
		System.out.println(m.get(trString));
		System.out.println(m.get(trList));
	}
}
