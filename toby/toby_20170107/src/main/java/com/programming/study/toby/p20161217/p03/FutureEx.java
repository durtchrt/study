package com.programming.study.toby.p20161217.p03;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class FutureEx {
     /**
     *   Future 사용법
     *
     */

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        Future<String> f = es.submit( () -> {
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        });

        System.out.println(f.isDone());
        Thread.sleep(2100);
        System.out.println("Exit");

        System.out.println(f.isDone());
        System.out.println(f.get());
        es.shutdown();

    }
}
