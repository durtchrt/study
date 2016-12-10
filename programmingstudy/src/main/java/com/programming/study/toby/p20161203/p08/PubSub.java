package com.programming.study.toby.p20161203.p08;

import lombok.extern.slf4j.*;
import org.reactivestreams.*;

import java.util.function.*;
import java.util.stream.*;

/**
 *   refactoring used by Generic
 *   -> p07에서처럼 타입을 먼저 줘보고 generic 타입으로 변경하는게 수월함 - 완전 꿀팁!!!
 *
 */

@Slf4j
public class PubSub {
	public static void main(String[] args) {
		Publisher<Integer> publisher = iterPub(Stream.iterate(1, a -> a + 1 ).limit(10).collect(Collectors.toList()));
//		Publisher<String> reducePub =  reducePub(publisher, "", (a, b) -> a + "-"+  b);
		Publisher<StringBuilder> reducePub =  reducePub(publisher, new StringBuilder(), (a, b) -> a.append(b + ","));
		reducePub.subscribe(logSub());
	}



	private static <T, R> Publisher<R> reducePub(Publisher<T> publisher, R init, BiFunction<R, T, R> bf) {
		return new Publisher<R>() {
			@Override
			public void subscribe(Subscriber<? super R> sub) {
				publisher.subscribe(new DelegateSub<T, R>("reducSub", sub){
					R result = init;

					@Override
					public void onNext(T i) {
						result = bf.apply(result, i);
					}

					@Override
					public void onComplete() {
						sub.onNext(result);
						sub.onComplete();
					}
				});
			}
		};
	}


	private static <T, R> Publisher<R> mapPub(Publisher<T> pub, Function<T, R> f) {
		return new Publisher<R>() {
			@Override
			public void subscribe(Subscriber<? super R> sub) {
				pub.subscribe(new DelegateSub<T, R>("mapPub", sub){
					@Override
					public void onNext(T i) {
						sub.onNext(f.apply(i));
					}
				});

			}
		};
	}

	private static <T> Subscriber<T> logSub() {
		return new Subscriber<T>() {
			@Override
			public void onSubscribe(Subscription s) {
				log.debug("logSub onSubscribe:");
				s.request(Long.MAX_VALUE);
			}

			@Override
			public void onNext(T i) {
				log.debug("logSub onNext:" + i);
			}

			@Override
			public void onError(Throwable t) {
				log.debug("logSub onError {}:" + t);
			}

			@Override
			public void onComplete() {
				log.debug("logSub onComplete:");
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

							log.debug("iterPub onComplete");
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
