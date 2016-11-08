package com.programming.study.toby.p20161105.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken6 {

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
	}

	public static void main(String[] args) throws NoSuchFieldException {
		TypesafeMap m = new TypesafeMap();
		m.put(new TypeReference<Integer>(){}, 1);
		m.put(new TypeReference<String>(){}, "String");
//		m.put(new TypeReference<List<Integer>>(){}, Arrays.asList(1,2,3));
		m.put(new TypeReference<List>(){}, Arrays.asList(1,2,3));

		System.out.println(m.get(new TypeReference<Integer>() { }));
		System.out.println(m.get(new TypeReference<String>() { }));
//		System.out.println(m.get(new TypeReference<List<Integer>>() { }));
		System.out.println(m.get(new TypeReference<List>() { }));

		//null 이나옴
		// put할 때 new TypeReference
		// get할 때 new TypeReference
		// 생성된 객체는 같은 객체가 아니기 때문.
		// equals 메서드를 정의해줘야함.
		// equasl, hashcode orverride
	}
}
