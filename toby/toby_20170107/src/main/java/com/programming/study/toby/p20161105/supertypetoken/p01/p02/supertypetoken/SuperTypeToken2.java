package com.programming.study.toby.p20161105.supertypetoken.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken2 {

	static class Sup<T> {
		T value;
	}

	//super 클래스에 generic으로 정보를 줬기 때문에 컴파일 타임에 타입정보를 가질 수 있다.
	// 이전 버전때문에 byte코드에 타입정보를 줄 수 없었지만.
	// extends를 parameterized type을 전달하면 언어 설계자들 입장에서는
	// 바이트코드에 타입정보를 넣어도 된다.
	// 왜냐하면, 이전 버전에 없던 표현이므로!
	// 이것을 이용하여 타입정보를 전달하는 기법을 사용
	static class Sub extends Sup<String> {

	}

	public static void main(String[] args) throws NoSuchFieldException {

		//local class
		class Sub extends Sup<List<String>> {

		}

		Sub b = new Sub();
		Type t = b.getClass().getGenericSuperclass();
		ParameterizedType ptype = (ParameterizedType) t;
		// Sup는 다르게 Sub는 런타임에 타입정보를 가짐.
		System.out.println(ptype.getActualTypeArguments()[0]);
	}
}
