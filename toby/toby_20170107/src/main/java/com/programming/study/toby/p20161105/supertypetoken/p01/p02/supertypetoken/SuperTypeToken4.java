package com.programming.study.toby.p20161105.supertypetoken.p01.p02.supertypetoken;

import java.lang.reflect.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken4 {

	static class Sup<T> {
		T value;
	}

	public static void main(String[] args) throws NoSuchFieldException {
				// anonymous class
		Sup b = new Sup<String>(){};

		// Generic 정보가 있는 익명 메서드를 사용하면 타입정보가 전달.
		Type t1 = b.getClass().getGenericSuperclass();
		ParameterizedType ptype1 = (ParameterizedType) t1;
		System.out.println(ptype1.getActualTypeArguments()[0]);

		//위 Generic 익명메서드를 변수에 할당하지 않고 간단히 표기한 방법
		// {}는 앞의 클래스를 상속받아서 새로운 클래스를 만든 - 이 과정에 이름이 없으므로 익명 클래스
		Type t2 = new Sup<String>(){}.getClass().getGenericSuperclass();
		ParameterizedType ptype2 = (ParameterizedType) t2;
		System.out.println(ptype2.getActualTypeArguments()[0]);

	}
}
