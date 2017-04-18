package examples.p02;

import java.util.*;
import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class ThreadPoolExample {

    public static void main(String[] args) throws InterruptedException {
        int THREAD_LIMIT = 4;
        SimpleThreadPool pool = new SimpleThreadPool(THREAD_LIMIT);
        Runnable r = new Runnable() {
            @SneakyThrows
            @Override
            public void run() {
                log.debug("Hello KSUG");
//                Thread.sleep(100);
            }
        };
        int i =0;
        while(true) {
            pool.submit(r);
            if(i != 0 && i % THREAD_LIMIT == 0) Thread.sleep(100);
            Thread.sleep(1000);

            i++;

        }
    }
}

@Slf4j
class SimpleThreadPool {
    private int threadLimit;
//    Queue<Runnable> workQueue = new ConcurrentLinkedQueue<>();
    Queue<Runnable> workQueue = new LinkedList<>();

    public SimpleThreadPool(int threadLimit) {
        this.threadLimit = threadLimit;
        for(int i=0; i< threadLimit; i++) {
            new WorkThread(this.workQueue).start();
        }
    }
    public void submit(Runnable r) {
        log.info("submit");
        this.workQueue.add(r);
    }
}

@Slf4j
class WorkThread extends Thread {
    Queue<Runnable> workQueue;

    public WorkThread(Queue<Runnable> workQueue) {
        this.workQueue = workQueue;
    }

    @Override
    public void run() {
        while(true) {
                if(!workQueue.isEmpty()) {
                    Runnable r = workQueue.poll();
                    if(r != null) r.run();
                }

        }
    }
}

