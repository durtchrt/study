package examples.p04;

import java.util.*;
import java.util.concurrent.*;

public class FutureExample {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        SimpleThreadPool pool = new SimpleThreadPool(3);

//        ExecutorService es = Executors.newFixedThreadPool(3);
        List<SimpleFuture> list = new ArrayList();
        for(int i =0; i< 100; i++) {
            SimpleFuture<String> simpleFuture = pool.submit(() -> {
                Thread.sleep(1000);
                System.out.println("Hello");
                return "Hello";
            });
            list.add(simpleFuture);
//            Future<String> f = pool.submit(() -> {
//                Thread.sleep(1000);
//                System.out.println("Hello");
//                return "Hello";
//            });
//            System.out.println(f.get());
        }

        for (SimpleFuture future : list) {
            System.out.println(future.get());
        }
        

//        list.stream().map(x -> {
//            try {
//                return x.get();
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
//            return "";
//        }).forEach(System.out::println);
//        pool.submit()
    }
}

class SimpleFuture<T>  {
    private Object futureNotifier = new Object();
    private T result;
    private Callable c;

    public SimpleFuture(Callable c) {
        this.c = c;
    }

    public T get() throws InterruptedException {
        if(result == null) {
            synchronized (futureNotifier) {
                futureNotifier.wait();
            }
        }
        return result;
    }

    public void run() throws Exception {
        result = (T)c.call();
        synchronized (futureNotifier) {
            futureNotifier.notify();
        }
    }

}

class SimpleThreadPool {
    private int threadLimit;

    Object notifier = new Object();
//    Queue<Runnable> workQueue = new ConcurrentLinkedQueue<>();
    Queue<SimpleFuture> workQueue = new LinkedList<>();

    public SimpleThreadPool(int threadLimit) {
        this.threadLimit = threadLimit;
        for(int i=0; i < threadLimit; i++) {
             new WorkThread(this.workQueue, notifier).start();
        }
    }

    public <T> SimpleFuture<T> submit(Callable<T> c) {
        SimpleFuture<T> f = new SimpleFuture<>(c);
        workQueue.add(f);
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
    public void run() {
        while(true) {
            if(!workQueue.isEmpty()) {
                SimpleFuture f = workQueue.poll();
                try {
                    f.run();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } else {
                try {
                    synchronized (notifier){
                        notifier.wait();
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

