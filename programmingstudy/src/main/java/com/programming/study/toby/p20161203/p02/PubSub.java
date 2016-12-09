package com.programming.study.toby.p20161203.p02;

import lombok.extern.slf4j.*;
import org.apache.commons.logging.*;
import org.reactivestreams.*;

import java.util.function.*;
import java.util.stream.*;

/**
 *
 *  기존 p01 코드 리팩토링
 *
 *  Reactive Streams - Operators
 *
 *  Publisher -> [Data1] -> Operator1 -> [Data2] -> Opertator2 -> [Data3] -> Subscriber
 *
 *
 *  [코드 흐름]  Publisher -> [Data1] -> mapPub -> [Data2] ->  Subscriber
 *
 *
 *  publisher -> [Data1] -> mapPub -> [Data2] -> LogSub
 *                      <- subscribe(LogSub)
 *                      -> onSubscrib(s)
 *                      -> onNext
 *                      -> onNext
 *                      -> onComplete
 *
 *
 *  1. map(d1 -> f -> d2)
 *
 */

@Slf4j
public class PubSub {
	public static void main(String[] args) {
		Publisher<Integer> publisher = iterPub(Stream.iterate(1, a -> a + 1 ).limit(10).collect(Collectors.toList()));
		//                                               lambda type cating
//		Publisher<Integer> mapPub1 = mapPub(publisher, (Function<Integer, Integer>) s -> s * 10);
		//operator 1
		Publisher<Integer> mapPub1 = mapPub(publisher, s -> s * 10);
		//operator 2
		Publisher<Integer> mapPub2 = mapPub(mapPub1, s -> -s);
		mapPub2.subscribe(logSub());
	}

	private static Publisher<Integer> mapPub(Publisher<Integer> publisher, Function<Integer, Integer> f) {
		return new Publisher<Integer>() {
			@Override
			public void subscribe(Subscriber<? super Integer> subscriber) {
//				publisher.subscribe(subscriber);
				publisher.subscribe(new Subscriber<Integer>() {
					@Override
					public void onSubscribe(Subscription s) {
						subscriber.onSubscribe(s);
					}

					@Override
					public void onNext(Integer i) {
						subscriber.onNext(f.apply(i));
					}

					@Override
					public void onError(Throwable t) {
						subscriber.onError(t);
					}

					@Override
					public void onComplete() {
						subscriber.onComplete();
					}
				});
			}
		};
	}


	private static Subscriber<Integer> logSub() {
		return new Subscriber<Integer>() {
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
			public void onError(Throwable t) { log.debug("onError {}:" + t);

			}

			@Override
			public void onComplete() {
				log.debug("onComplete:");
			}
		};
	}

	private static Publisher<Integer> iterPub(final Iterable<Integer> iter) {
		return new Publisher<Integer>() {
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
	}

}
