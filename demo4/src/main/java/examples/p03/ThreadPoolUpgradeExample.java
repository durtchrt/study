package examples.p03;

import java.util.*;
import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class ThreadPoolUpgradeExample {

    @SneakyThrows
    public static void main(String[] args) {
        final int THREAD_LIMIT = 3;

        SimpleThreadPool pool = new SimpleThreadPool(THREAD_LIMIT);
        Runnable r = new Runnable() {
            @SneakyThrows
            public void run() {
                log.debug("Hello KSUG");
//                Thread.sleep(100);
            }
        };

        int i = 0;
        while(true) {
            pool.submit(r);
            pool.submit(r);
            pool.submit(r);
            if(i != 0 && i % THREAD_LIMIT == 0) Thread.sleep(100);
                Thread.sleep(10000);

            i++;
        }
    }
}

@Slf4j
class SimpleThreadPool {
    private int threadLimit;

    Object notifier = new Object();
//    Queue<Runnable> workQueue = new ConcurrentLinkedQueue<>();
    Queue<Runnable> workQueue = new LinkedList<>();

    public SimpleThreadPool(int threadLimit) {
        this.threadLimit = threadLimit;
        for(int i=0; i < threadLimit; i++) {
             new WorkThread(this.workQueue, notifier).start();
        }
    }

    public void submit(Runnable r) {
        this.workQueue.add(r);
        log.info("submit");

        //java.lang.IllegalMonitorStateException
        synchronized( notifier ) {
            log.warn("notifier notify");
            notifier.notify();
        }
    }
}

@Slf4j
class WorkThread extends Thread {
    Queue<Runnable> workQueue;
    Object notifier;

    public WorkThread(Queue<Runnable> workQueue, Object notifier) {
        this.workQueue = workQueue;
        this.notifier = notifier;
    }

    @Override
    @SneakyThrows
    public void run() {
        while(true) {
            if(!workQueue.isEmpty()) {
                Runnable r = workQueue.poll();
                if(r != null) r.run();
            } else {
                synchronized (notifier){
                    log.error("notifier wait");
                    notifier.wait();
                }
            }
        }
    }
}
