package com.programming.study.toby.p20161105.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken3 {

	static class Sup<T> {
		T value;
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
