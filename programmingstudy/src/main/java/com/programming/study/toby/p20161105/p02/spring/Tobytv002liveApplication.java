package com.programming.study.toby.p20161105.p02.spring;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

import javax.annotation.*;
import java.util.*;

/**
 * Created by james.boo on 2016. 11. 8..
 */
@SpringBootApplication
public class Tobytv002liveApplication {
	public static void main(String[] args) {
		SpringApplication.run(Tobytv002liveApplication.class, args);
	}
/*
	static class GenericService<T> {
//		@Autowired T t;  // Spring 3.2까지는 Object로 가져올수 밖에 없었음.
		T t;  // Autowired를 쓰지 않고

		@Autowired
		ApplicationContext ctx;


		@PostConstruct
		void init() {
			Class tType;
			t = ctx.getBean(tType); // 이런 식으로 Autowired를 사용하지 않고 런타임에 타입정보를 가져와서 타입정보를 전달
		}

	}

	@Component
	static class MyService1 extends GenericService<String> {

	}

	@Component
	static class MyService2 extends GenericService<Integer> {

	}
*/

	@RestController
	public static class MyController {
		@RequestMapping("/")
		public List<User> users() {
			return Arrays.asList(new User("A"), new User("B"), new User("C"));
		}
	}






}
