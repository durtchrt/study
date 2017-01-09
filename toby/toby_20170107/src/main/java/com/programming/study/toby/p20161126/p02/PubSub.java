package com.programming.study.toby.p20161126.p02;

import org.reactivestreams.*;

import java.util.*;
import java.util.concurrent.*;

public class PubSub {
	public static void main(String[] args) throws InterruptedException {
		// Publisher <- Observable
		// Subscriber <- Observer
		// 중간 이미지 참조 http://projectreactor.io/old/reference/
		Iterable<Integer> iter = Arrays.asList(1, 2, 3, 4, 5);

		ExecutorService es = Executors.newSingleThreadExecutor();
		Publisher publisher = new Publisher() {
			Iterator<Integer> it = iter.iterator();
			@Override
			public void subscribe(Subscriber subscription) {
				subscription.onSubscribe(new Subscription() {
					@Override
					public void request(long n) {
						System.out.println(">>>> " + n);
						Future<?> f = es.submit(() -> {
							try {
								int i = 0;
//								while (i++ < n) {
									if (it.hasNext()) {
										subscription.onNext(it.next());
									} else {
										subscription.onComplete();
//										break;
									}
//								}
							} catch (RuntimeException e) {
								subscription.onError(e);
							}
						});
					}

					@Override
					public void cancel() {

					}
				});
			}
		};

		Subscriber<Integer> subscriber = new Subscriber<Integer>() {
			//onSubscribe onNext* (onError | onComplete)?
			Subscription subscription;
			@Override
			public void onSubscribe(Subscription subscription) {
				System.out.println("onSubscribe");
//				s.request(5);
				this.subscription = subscription;
				this.subscription.request(1);
			}

			@Override
			public void onNext(Integer o) {
				System.out.println(Thread.currentThread().getName() + " onNext: " + o);
				this.subscription.request(1);
			}

			@Override
			public void onError(Throwable t) {
				System.out.println("onError");
			}

			@Override
			public void onComplete() {
				System.out.println("onComplete");
			}
		};

		publisher.subscribe(subscriber);
		es.awaitTermination(10, TimeUnit.SECONDS);

	}
}
