package com.programming.study.toby.p20161217.p04;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class CallbackEx {
    /**
     *   Callback 예제 만들기 준비 - Future에 Callback 기능 추가하기 전단계.
     *
     */

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        FutureTask<String> f = new FutureTask<>(()-> {
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        });

        es.execute(f);

        System.out.println(f.get());
        es.shutdown();

    }
}
