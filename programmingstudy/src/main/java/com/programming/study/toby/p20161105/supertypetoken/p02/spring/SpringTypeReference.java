package com.programming.study.toby.p20161105.supertypetoken.p02.spring;

import org.springframework.core.*;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 8..
 */
public class SpringTypeReference {
	public static void main(String[] args) {
		// ParameterizedTypeReference 스프링 3.2 이상에서 사용 가능
		ParameterizedTypeReference<?> typeRef = new ParameterizedTypeReference<List<Map<Set<Integer>, String>>>() { };
		System.out.println(typeRef.getType());
	}
}
