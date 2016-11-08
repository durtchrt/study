package com.programming.study.toby.p20161105.p01.p02.supertypetoken;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 7..
 */
public class SuperTypeToken1 {
	//Super Type Token
	//Neal Gafter: 프로그래밍언어에 폭넓은 지식을 가지신분 블로그 추천하심.

	// Type erasure: 바이트코드에 클래스 정보를 날려버리는것 - jdk 1.4 이하의 버전 호환성을 위해 채택
	//				generics는 jdk 1.5 이상 버전에서 적용
	//				1. java 5 이전 버전과 호환성 문제 2. 자바는 엔터프라이즈에서 많이 사용해서 버전업에대해서 엄격한 사용환경이 많았다.
	//				자바에서 하위 호환성을 잘보장해줘서 지금의 엔터프라이즈 환경에서 적극 반영되는 인식 만들어졌다고 생각함
	// refication: 컴파일할 때 바이트코드에 클래스 정보를 포함.
	//				C#에서는 버전 하위 호환성 버리고 강제 시킴. 자바보다 역사가 짧으므로 과감한 정책을 취하기 쉬운 편이였다.

	static class Sup<T> {
		T value;
	}

	public static void main(String[] args) throws NoSuchFieldException {
		Sup<String> s = new Sup();
		// Erasure 때문에 런타임에 parameterized type 정보가 날라가서 Object를 출력
		System.out.println(s.getClass().getDeclaredField("value").getType());
	}
}
