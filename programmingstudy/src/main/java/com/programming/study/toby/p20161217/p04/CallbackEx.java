package com.programming.study.toby.p20161217.p04;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class CallbackEx {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        FutureTask<String> f = new FutureTask<>(()-> {
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        });

        es.execute(f);

//        System.out.println(f.isDone());
//        Thread.sleep(2100);
//        System.out.println("Exit");
//
//        System.out.println(f.isDone());
        System.out.println(f.get());
        es.shutdown();

    }
}
