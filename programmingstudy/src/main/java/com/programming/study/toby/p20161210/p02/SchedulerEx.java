package com.programming.study.toby.p20161210.p02;

import lombok.extern.slf4j.*;
import org.reactivestreams.*;

import java.util.concurrent.*;

/**
 *  토비의 봄 TV 7회 - 리액티브 스프링 웹개발(3) - Reactive Streams - Schedulers
 *
 */
@Slf4j
public class SchedulerEx {
	//Reactive Streams
	//projectreactor 3.0
	//springboot 프로젝트 생성시 2.0.0 reactive web을 선택하면 Reactive streams 라이브러리가 있는 프로젝트 생성 가능


	public static void main(String[] args) {
		Publisher<Integer> pub = sub -> {
			sub.onSubscribe(new Subscription() {
				@Override
				public void request(long n) {
					log.debug("request()");
					sub.onNext(1);
					sub.onNext(2);
					sub.onNext(3);
					sub.onNext(4);
					sub.onNext(5);
					sub.onComplete();
				}

				@Override
				public void cancel() {

				}
			});
		};
		Publisher<Integer> pubOnPub = sub -> {
			ExecutorService es = Executors.newSingleThreadExecutor();
			es.submit(() -> pub.subscribe(sub));
		};

		pubOnPub.subscribe(new Subscriber<Integer>() {
			@Override
			public void onSubscribe(Subscription s) {
				log.debug("onSubscribe");
				s.request(Long.MAX_VALUE);
			}

			@Override
			public void onNext(Integer integer) {
				log.debug("onNext:{}", integer);
			}

			@Override
			public void onError(Throwable t) {
				log.debug("onError: {}", t);

			}

			@Override
			public void onComplete() {
				log.debug("onComplete");
//				if(true) throw new RuntimeException("err");
			}
		});

		log.debug("exit");

	}
}
