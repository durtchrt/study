package com.programming.study.toby.p20161120.p3;

import java.io.*;
import java.util.function.*;

public class IntersectionType {
	public static void main(String[] args) {
		hello((Function & Serializable & Cloneable) s->s);
		//Intersection Type : 람다식에서 타입을 캐스팅할 때 &를 붙여서 추가적인 interface를 명시하는 것
		//marker interface: 익명메서드가 없는 interface :http://javarevisited.blogspot.kr/2012/01/what-is-marker-interfaces-in-java-and.html
	}

//	private static void hello(Function o) { }
	private static <T extends Function & Serializable & Cloneable> void hello(T o) { }
}
