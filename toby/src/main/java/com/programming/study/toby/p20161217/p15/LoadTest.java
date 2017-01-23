package com.programming.study.toby.p20161217.p15;

import org.springframework.util.*;
import org.springframework.web.client.*;

import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

import lombok.extern.slf4j.*;

@Slf4j
public class LoadTest {

    static AtomicInteger counter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        ExecutorService es = Executors.newFixedThreadPool(100);
        RestTemplate rt = new RestTemplate();
        // TODO: 2016. 12. 17.
        //url이 다르네??
        String url = "http://localhost:8080/dr";

        StopWatch main = new StopWatch();
        main.start();

        for (int i=0; i < 100; i++) {
            es.execute( () -> {
                int idx = counter.addAndGet(1);
                log.info("Thread" + idx);

                StopWatch sw = new StopWatch();
                sw.start();

                rt.getForObject(url, String.class);

                sw.stop();

                log.info("Elapsed: {} -> {}", idx, sw.getTotalTimeSeconds());
            });
        }

        es.shutdown();
        es.awaitTermination(100, TimeUnit.SECONDS);

        main.stop();
        log.info("Elapsed: main {}",  main.getTotalTimeSeconds());


    }


}
