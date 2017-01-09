package com.programming.study.toby.p20161203.p07;

import lombok.extern.slf4j.*;
import org.reactivestreams.*;

import java.util.function.*;
import java.util.stream.*;

/**
 *   refactoring used by Generic
 *
 */

@Slf4j
public class PubSub {
	public static void main(String[] args) {
		Publisher<Integer> publisher = iterPub(Stream.iterate(1, a -> a + 1 ).limit(10).collect(Collectors.toList()));
		Publisher<String> mapPub = mapPub(publisher, s -> "[" + s + "]");
		Publisher<String> reducePub =  reducePub(publisher, "", (a, b) -> a + "-"+  b);
		reducePub.subscribe(logSub());
	}



	private static Publisher<String> reducePub(Publisher<Integer> publisher, String init, BiFunction<String, Integer, String> bf) {
		return new Publisher<String>() {
			@Override
			public void subscribe(Subscriber<? super String> sub) {
				publisher.subscribe(new DelegateSub<Integer, String>("reducSub", sub){
					String result = init;

					@Override
					public void onNext(Integer i) {
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
