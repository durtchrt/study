package examples.p04;

import java.util.*;
import java.util.concurrent.*;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class FutureExample {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        SimpleThreadPool pool = new SimpleThreadPool(3);
        Callable<String> callback = () -> {
            Thread.sleep(100);
            log.debug("Callable");
            return "Hello KSUG";
        };
        List<SimpleFuture> list = new ArrayList<>();
        for(int i =0; i< 100; i++) {

            SimpleFuture<String> simpleFuture = pool.submit(callback);
            list.add(simpleFuture);
        }

        for (SimpleFuture<String> future : list) {
            log.error(future.get());
        }
    }
}

@Slf4j
class SimpleFuture<T> implements Runnable  {
    private Object futureNotifier = new Object();
    private T result;
    private Callable c;

    public SimpleFuture(Callable c) {
        this.c = c;
    }

    @SneakyThrows
    public T get() {
        if(result == null) {
            synchronized (futureNotifier) {
                log.error("get wait");
                futureNotifier.wait();
            }
        }
        return result;
    }

    @Override
    @SneakyThrows
    public void run() {
        result = (T)c.call();
        synchronized (futureNotifier) {
            log.warn("futureNotifier notify");
            futureNotifier.notify();
        }
    }

}

class SimpleThreadPool {
    private int threadLimit;

    Object notifier = new Object();
    Queue<SimpleFuture> workQueue = new ConcurrentLinkedQueue<>();
//    Queue<SimpleFuture> workQueue = new LinkedList<>();

    public SimpleThreadPool(int threadLimit) {
        this.threadLimit = threadLimit;
        for(int i=0; i < threadLimit; i++) {
             new WorkThread(this.workQueue, notifier).start();
        }
    }

    public <T> SimpleFuture<T> submit(Callable<T> c) {
        SimpleFuture<T> f = new SimpleFuture<>(c);
        workQueue.add(f);
        synchronized( notifier ) {
            notifier.notify();
        }
        return f;
    }

}

class WorkThread extends Thread {
    Queue<SimpleFuture> workQueue;
    Object notifier;

    public WorkThread(Queue<SimpleFuture> workQueue, Object notifier) {
        this.workQueue = workQueue;
        this.notifier = notifier;
    }

    @Override
    @SneakyThrows
    public void run() {
        while(true) {
            if(!workQueue.isEmpty()) {
                SimpleFuture f = workQueue.poll();
                f.run();
            } else {
                synchronized (notifier){
                    notifier.wait();
                }
            }
        }
    }
}

