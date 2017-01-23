package com.programming.study.toby.p20161210.p08;

import lombok.extern.slf4j.*;
import reactor.core.publisher.*;

import java.time.*;
import java.util.concurrent.*;

/**
 *
 *  토비의 봄 TV 7회 - 리액티브 스프링 웹개발(3) - Reactive Streams - Schedulers
 *
 */
@Slf4j
public class FluxScEx {
	public static void main(String[] args) throws InterruptedException {
		// Deamon Thread로 생성됨 - jvm이 daemon 쓰레드는 kill함.
		// 그래서 sleep를 추가해야지만 예제가 동작함.
		Flux.interval(Duration.ofMillis(500))
			.take(10)
			.subscribe(s -> log.debug("onNext: {}", s));

		TimeUnit.SECONDS.sleep(10);
	}
}
