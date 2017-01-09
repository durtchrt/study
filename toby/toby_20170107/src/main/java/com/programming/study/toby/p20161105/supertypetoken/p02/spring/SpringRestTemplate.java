package com.programming.study.toby.p20161105.supertypetoken.p02.spring;

import org.springframework.core.*;
import org.springframework.http.*;
import org.springframework.web.client.*;

import java.util.*;

/**
 * Created by james.boo on 2016. 11. 8..
 */
public class SpringRestTemplate {
	public static void main(String[] args) {
		RestTemplate rt = new RestTemplate();
//		List<User> users = rt.getForObject("http://localhost:8080", List.class);
		// java.lang.ClassCastException: java.util.LinkedHashMap cannot be cast to com.programming.study.toby.p20161105.p02.spring.User
		// 에러발생 - generic은 List<user>
//		System.out.println(users.get(0).getName());

		List<Map> users1 = rt.getForObject("http://localhost:8080", List.class);
		System.out.println(users1);

		List<User> users2 = rt.exchange("http://localhost:8080", HttpMethod.GET, null, new ParameterizedTypeReference<List<User>>() { }).getBody();
		users2.forEach(System.out::println);

	}
}
