//package com.programming.study.toby.p161022.examplecast;
//
//import org.springframework.boot.*;
//import org.springframework.boot.autoconfigure.*;
//import org.springframework.context.*;
//import org.springframework.web.bind.annotation.*;
//import reactor.core.publisher.*;
//import reactor.core.scheduler.*;
//
//import java.util.concurrent.*;
//
//@SpringBootApplication
//public class Sb5Application2 {
//
//	public static void main(String[] args) {
//		ConfigurableApplicationContext c = SpringApplication.run(Sb5Application2.class,  "a", "b");
//	}
//
//	@RestController
//	public static class MyController {
//
//		// HTTP Request 3 Part: request line, header, body
//		// HTTP Response 3 Part: status code, header, body
//
//		// HTTP Request
//		// Request-Line(Method SP Request-URI SP HTTP-Version CRLF)
//		//*(( general-header | request-header | entity-header ) CRLF)
//		//CRLF
//		//[ message-body ]
//
//		@RequestMapping("/hello1")
//		public String hello1() {
//			return "<h1>Hello</h1>";
//		}
//
//		@RequestMapping("/hello2")
//		public Mono<String> hello2() {
//			return Mono.just("<h1>Hello</h1>");
//		}
//
//		@RequestMapping("/hello3")
//		public Mono<String> hello3() {
//			return Mono
//				.just("<h1>Hello</h1>")
//				.map(s -> s.toUpperCase())
//				.publishOn(Schedulers.newSingle("publishOn"))
//				.log() ;
//		}
//
//		@RequestMapping("/hello4")
//		public CompletableFuture<String> hello() {
//			return CompletableFuture
//					.supplyAsync(() -> "Hello World")
//					.thenApplyAsync(String::toUpperCase);
//		}
//
//		// JAVA 9 Reactive stream : https://github.com/reactive-streams/reactive-streams-jvm/tree/v1.0.0#specification
//	}
//
//}
