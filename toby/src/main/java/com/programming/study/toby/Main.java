package com.programming.study.toby;

import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        ExecutorService es = Executors.newFixedThreadPool(2);
        for(int i =0; i< 10; i++) {
            Future f = es.submit(() -> {
                try {
                    System.out.println("--->");
                    TimeUnit.SECONDS.sleep(5);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
        es.shutdown();
        es.awaitTermination(1, TimeUnit.HOURS);


    }
}
