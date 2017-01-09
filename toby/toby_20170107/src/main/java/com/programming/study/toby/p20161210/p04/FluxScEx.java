package com.programming.study.toby.p20161210.p04;

import reactor.core.publisher.*;
import reactor.core.scheduler.*;

/**
 *
 *  토비의 봄 TV 7회 - 리액티브 스프링 웹개발(3) - Reactive Streams - Schedulers
 *
 */
public class FluxScEx {
	public static void main(String[] args) {
		Flux.range(1, 10)
			.publishOn(Schedulers.newSingle("pub"))
			.log()
			.subscribeOn(Schedulers.newSingle("sub"))
			.subscribe(System.out::println);
		System.out.println("exit");
		//thread가 종료되지 않는 코드 개선
	}
}
