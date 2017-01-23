package com.programming.study.toby.p20161203.p04;

import lombok.extern.slf4j.*;
import org.reactivestreams.*;

@Slf4j
public class DelegateSub implements Subscriber<Integer> {
	private String name;
	private Subscriber subscriber;

	public DelegateSub(String name, Subscriber subscriber) {
		this.name = name;
		this.subscriber = subscriber;
	}

	@Override
	public void onSubscribe(Subscription s) {
		log.debug(name + " onSubscribe");
		subscriber.onSubscribe(s);
	}

	@Override
	public void onNext(Integer i) {
		log.debug(name + " onNext");
		subscriber.onNext(i);
	}

	@Override
	public void onError(Throwable t) {
		log.debug(name + " onError");
		subscriber.onError(t);
	}

	@Override
	public void onComplete() {
		log.debug(name + " onComplete");
		subscriber.onComplete();
	}
}
