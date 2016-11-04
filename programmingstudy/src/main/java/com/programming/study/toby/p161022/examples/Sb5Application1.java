package com.programming.study.toby.p161022.examples;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.context.annotation.*;

/**
 * Created by james.boo on 2016. 11. 4..
 */
@SpringBootApplication
public class Sb5Application1 {

	//springboot를 사용할 때 간단히 사용하고 싶을때 꿀팁
	public static void main(String[] args) {
		try( ConfigurableApplicationContext c = SpringApplication.run(Sb5Application1.class,  "a", "b")) {

		}
	}

	@Bean
	public /*CommandLineRunner*/ ApplicationRunner run() {
	/*
		return new ApplicationRunner() {
			@Override
			public void run(ApplicationArguments applicationArguments) throws Exception {
				System.out.println("run()...");
			}
		};
	*/
		//익명 클래스를 람다식으로 변경
		return (args) -> System.out.println("run()...");
	}
}
