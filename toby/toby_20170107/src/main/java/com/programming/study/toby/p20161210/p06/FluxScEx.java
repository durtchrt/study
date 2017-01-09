package com.programming.study.toby.p20161210.p06;

import lombok.extern.slf4j.*;
import reactor.core.publisher.*;
import reactor.core.scheduler.*;

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
		Flux
			.interval(Duration.ofMillis(500))
			.subscribe(s -> log.debug("onNextL{}", s));

		TimeUnit.SECONDS.sleep(5);

	}
}
