package com.programming.study.toby.p20161231.p01;

import org.springframework.util.*;
import org.springframework.web.client.*;

import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

import lombok.extern.slf4j.*;

@Slf4j
public class LoaTestBefore {

    static AtomicInteger counter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        ExecutorService es = Executors.newFixedThreadPool(100);
        RestTemplate rt = new RestTemplate();
        String url = "http://localhost:8080/rest";

        StopWatch main = new StopWatch();
        main.start();


        //아래의 코드는 쓰레드 동기화가 고려안된 코드
        for (int i=0; i < 100; i++) {
            es.execute( () -> {
                int idx = counter.addAndGet(1);
                log.info("Thread" + idx);

                StopWatch sw = new StopWatch();
                sw.start();

                String res = rt.getForObject(url, String.class);

                sw.stop();

                log.info("Elapsed: {} -> {} / {}", idx, sw.getTotalTimeSeconds(), idx);
            });
        }

        es.shutdown();
        es.awaitTermination(100, TimeUnit.SECONDS);

        main.stop();
        log.info("Elapsed: main {}",  main.getTotalTimeSeconds());


    }


}

