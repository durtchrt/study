package com.programming.study.toby.p20161217.p02;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class FutureEx {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        Future<String> f = es.submit( () -> { // Future가 동작할때는 non-blocking
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        });

        System.out.println("Exit");

        System.out.println(f.get()); // future의 return 결과를 기다리는 get메서드는 blocking

        es.shutdown();

    }
}
