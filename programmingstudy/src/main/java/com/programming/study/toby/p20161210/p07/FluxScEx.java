package com.programming.study.toby.p20161210.p07;

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
		//user Thread - 하나라도 있으면 jvm이 종료 안됨
		Executors.newSingleThreadExecutor().execute(() -> {
			try {
				TimeUnit.SECONDS.sleep(1);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println("new Thread");
		});

	}
}
