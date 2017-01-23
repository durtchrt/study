package com.programming.study.toby.p20161203.p01;

import org.apache.commons.logging.*;
import org.reactivestreams.*;

import java.util.*;
import java.util.stream.*;

import static java.util.stream.IntStream.iterate;

/**
 *  TOBY TV 6회 - 스프링 리액티브 웹 개발 (2) - Operators
 *
 *  Reactive Streams -
 *
 *  operator 개념 , reactor 사용법을 위주로 진행
 *
 *  지난 방송 못본 사람 배려 요약.
 *  https://github.com/reactive-streams/reactive-streams-jvm#api-components
 *
 *  onError | onComplete => subscriber를 종료
 */

public class PubSub {
	static Log log = LogFactory.getLog(PubSub.class);

	public static void main(String[] args) {
		Iterable<Integer> iter = Stream.iterate(1, a -> a + 1 ).limit(10).collect(Collectors.toList());

		Publisher<Integer> publisher = new Publisher<Integer>() {
			@Override
			public void subscribe(Subscriber<? super Integer> subscriber) {
				subscriber.onSubscribe(new Subscription() {
					@Override
					public void request(long n) {
						try {
							iter.forEach( s -> subscriber.onNext(s));
							subscriber.onComplete();
						} catch (Throwable t) {
							t.printStackTrace();
							subscriber.onError(t);
						}
					}

					@Override
					public void cancel() {

					}
				});
			}
		};

		Subscriber<Integer> subscriber = new Subscriber<Integer>() {
			@Override
			public void onSubscribe(Subscription s) {
				log.debug("onSubscribe:");
				s.request(Long.MAX_VALUE);
			}

			@Override
			public void onNext(Integer integer) {
				log.debug("onNext:" + integer);

			}

			@Override
			public void onError(Throwable t) {
				log.debug("onError {}:" + t);

			}

			@Override
			public void onComplete() {
				log.debug("onComplete:");
			}
		};

		publisher.subscribe(subscriber);
	}

}
