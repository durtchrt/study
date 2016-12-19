package com.programming.study.toby.p20161217.p01;

import java.util.concurrent.*;

public class FutureEx {

    /**
     *
     *  자바에서 비동기를 처리하는 방법
     *  1. Future
     *  2. Callback
     *
     */
    public static void main(String[] args) throws InterruptedException {
        ExecutorService es = Executors.newCachedThreadPool();

        //동기적인 처리
//        Thread.sleep(2000);
//        System.out.println("Hello");

        es.execute( () -> {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) { }
            System.out.println("Hello");
        });

        System.out.println("Exit");

        es.shutdown();

    }
}
