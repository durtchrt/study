package com.programming.study.toby.p20161217.p05;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class CallbackEx {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        FutureTask<String> f = new FutureTask<String>(()-> {
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        }){
            @Override
            protected void done() {
                try {
                    System.out.println(get());
                } catch (InterruptedException | ExecutionException e) {
                    e.printStackTrace();
                }
            }
        };

        es.execute(f);
        es.shutdown();

    }
}
