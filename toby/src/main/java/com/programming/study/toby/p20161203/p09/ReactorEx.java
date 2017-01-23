package com.programming.study.toby.p20161203.p09;

import reactor.core.publisher.*;

public class ReactorEx {
	// reactor api
	// 이미지 참조
	// https://projectreactor.io/core/docs/api/reactor/core/publisher/Flux.html

	//시간 순서에 따라 비동기적으로 동작하는 것이라서 이것에 대한 제어가 고민할게 많음
	public static void main(String[] args) {
		//Flux - Publisher의 일종
		//인자는 emmiter라고 부름
		Flux.<Integer>create(e->{
			e.next( 1 );
			e.next( 2 );
			e.next( 3 );
			e.next( 4 );
			e.complete();
		})
		.log()
		.map( s-> s* 10)
		.log()
		.filter(p -> p > 25)
		.log()
		.reduce(0, (a, b) -> a + b)
		.log()
		.subscribe(System.out::println);
	}
}
