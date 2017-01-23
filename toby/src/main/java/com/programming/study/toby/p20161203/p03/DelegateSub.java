package com.programming.study.toby.p20161203.p03;

import org.reactivestreams.*;

public class DelegateSub implements Subscriber<Integer> {

	private Subscriber subscriber;

	public DelegateSub(Subscriber subscriber) {
		this.subscriber = subscriber;
	}

	@Override
	public void onSubscribe(Subscription s) {
		subscriber.onSubscribe(s);
	}

	@Override
	public void onNext(Integer i) {
		subscriber.onNext(i);
	}

	@Override
	public void onError(Throwable t) {
		subscriber.onError(t);
	}

	@Override
	public void onComplete() {
		subscriber.onComplete();
	}
}
