package com.programming.study.toby.p20161231.p06;

import org.springframework.util.*;
import org.springframework.web.client.*;

import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

import lombok.extern.slf4j.*;

@Slf4j
public class LoadTestThreadSync {

    static AtomicInteger counter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException, BrokenBarrierException {
        ExecutorService es = Executors.newFixedThreadPool(100);
        RestTemplate rt = new RestTemplate();
        String url = "http://localhost:8080/rest?idx={idx}";

        CyclicBarrier barrier = new CyclicBarrier(100);

        StopWatch main = new StopWatch();
        main.start();


        //아래의 코드는 쓰레드 동기화가 고려안된 코드
        for (int i=0; i < 100; i++) {
            es.submit( () -> {
                int idx = counter.addAndGet(1);
                log.info("Thread" + idx);

                barrier.await(); // Runnable은 throw가 없기 때문에 Callbable로 변경

                StopWatch sw = new StopWatch();
                sw.start();

                rt.getForObject(url, String.class, idx);

                sw.stop();

                log.info("Elapsed: {} -> {}", idx, sw.getTotalTimeSeconds());

                return null; // 컴파일러에게 이 람다식은 Callable이다라고 알려주기위한 트릭
            });
        }

        barrier.await();

        es.shutdown();
        es.awaitTermination(100, TimeUnit.SECONDS);

        main.stop();
        log.info("Elapsed: main {}",  main.getTotalTimeSeconds());


    }


}

