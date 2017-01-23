package com.programming.study.toby.p20161203.p10;

import org.reactivestreams.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class Tobytv006Application {
	@RestController
	public static class Controller {
		@RequestMapping("/hello")
		public Publisher<String> hello(String name) {
			return new Publisher<String>() {
				@Override
				public void subscribe(Subscriber<? super String> s) {
					s.onSubscribe(new Subscription() {
						@Override
						public void request(long n) {
							s.onNext("Hello " + name);
							s.onComplete();
						}

						@Override
						public void cancel() {

						}
					});

				}
			};
		}
	}

	public static void main(String[] args) {
		SpringApplication.run(Tobytv006Application.class, args);
	}

}
