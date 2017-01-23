package com.programming.study.toby.p20161126.p01;

import java.util.*;
import java.util.concurrent.*;

public class Main02 {
	// Source -> Event/Data -> Observer
	// Observable              Observer   - java
	// Subject                 Observer   - Gof
	// Publisher               Subscriber - Rx
	// Observable              Subscriber - ReactiveStreams
	//Observable JDK 1.0에서 구현됨 -> JAVA 9에서 deprecated - ReactiveStreams 때문


	// 쌍대성
	// Observable      <->     Iterable
	// Push                    Pull
	// notfifyObservers()      next()
	static class IntObserveable extends Observable implements Runnable {

		@Override
		public void run() {
			for(int i=0; i<=10; i++) {
				setChanged();
				notifyObservers(i); // 받는쪽에 쏴줌(push)
			}
		}
	}

	public static void main(String[] args) {
		Observer ob = new Observer(){
			@Override
			public void update(Observable o, Object arg) {
				System.out.println(Thread.currentThread().getName() + " " + arg);
			}
		};

		IntObserveable io = new IntObserveable();
		io.addObserver(ob);
//		io.run();
		ExecutorService es = Executors.newSingleThreadExecutor();
		es.execute(io);
		es.shutdown();

		System.out.println(Thread.currentThread().getName());
		//Observer 패턴 Push방식을 사용하면 Main Thread외에 다른 쓰레드레서 동작하는 코드를 만들때 상당히 편리하다

		// Rx를 만든 MS쪽에서는 Observer에 대해 2가지를 지적
		// 1. Observer은 끝(Complete)이라는 개념이 없다
		// 2. Error 처리에 대해 패턴에 녹아있지 않다
		// => 모던한 시스템에는 문제점이라고 보고 모던한 옵저버패터턴을 만듬 = Rx

		//reactive의 2개의 큰축
		//reactivex - http://reactivex.io/
		//reactive streams - http://www.reactive-streams.org/
	}
}
