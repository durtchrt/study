package com.programming.study.toby.p20161105.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken9 {

	static class TypesafeMap {
		Map<TypeReference<?>, Object> map = new HashMap<>();

		<T> void put(TypeReference<T> tr, T value) {
			map.put(tr, value);
		}

		<T> T get(TypeReference<T> tr) {
			if (tr.type instanceof Class<?>)
				return ((Class<T>)tr.type).cast(map.get(tr));
			else
				return ((Class<T>)((ParameterizedType)tr.type).getRawType()).cast(map.get(tr)); //TypeReference<List<String>>
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

	//Super Type Token: 익명클래스의 인스턴스화를 통해서 제네릭 정보를 전부 전달할 때 사용하는 것

	public static void main(String[] args) throws NoSuchFieldException {
		TypesafeMap m = new TypesafeMap();
		TypeReference<Integer> trInt = new TypeReference<Integer>() { };
		TypeReference<String> trString = new TypeReference<String>() { };
		TypeReference<List<Integer>> trIntegerList = new TypeReference<List<Integer>>() { }; //List<Integer>
		TypeReference<List<String>> trStringList = new TypeReference<List<String>>() { }; //List<String>

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
