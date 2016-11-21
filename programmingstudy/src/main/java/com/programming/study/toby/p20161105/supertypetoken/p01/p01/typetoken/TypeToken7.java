package com.programming.study.toby.p20161105.supertypetoken.p01.p01.typetoken;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class TypeToken7 {

	static class TypesafeMap {
		Map<Class<?>, Object> map =  new HashMap<>();
		<T> void put(Class<T> clazz, T value) {
			map.put(clazz, value);
		}
		<T> T get(Class<T> clazz) {
//			return map.get(clazz); // 컴파일에러 type casting error
			return clazz.cast(map.get(clazz));
		}
	}

	public static void main(String[] args) throws InstantiationException, IllegalAccessException {
		TypesafeMap m = new TypesafeMap();

		// Type Token : 아래의예처럼 Integer.class, String.class, List.class 등을 지칭
		// 타입정보를 가지고 값으로 넘기기 위해 사용
		m.put(Integer.class, 1);
		m.put(String.class, "String");
		m.put(List.class, Arrays.asList(1, 2, 3));
		m.put(List.class, Arrays.asList("s1", "s2", "s3"));
		//Map에 List.class 키가 두번 들어와서 String 타입의 요소를 가진 List.class가 이전의 키를 덮어씀.

//		m.put(List<Integer>.class, Arrays.asList(1, 2, 3));
//		m.put(List<String>.class, Arrays.asList("s1", "s2", "s3"));
		//Error:(32, 37) java: <identifier> expected
		//에러를 발생함. java의 문법은 Generic정보가 있는 타입토큰을 사용할수 없다.
		// parameterized type token을 사용할 수 없다.


		System.out.println(m.get(Integer.class));
		System.out.println(m.get(String.class));
		System.out.println(m.get(List.class));


	}
}
