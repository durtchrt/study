package examples.p02;

import java.util.*;

public class ThreadPoolExample {

    public static void main(String[] args) throws InterruptedException {
        SimpleThreadPool pool = new SimpleThreadPool(3);

        while(true) {
            pool.submit(new Runnable() {
                @Override
                public void run() {
                    System.out.println("--> " + Thread.currentThread().getName() + " Hello KSUG");
                }
            });

            Thread.sleep(1000);
        }
    }

}

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
        this.workQueue.add(r);
    }

}

class WorkThread extends Thread {
    Queue<Runnable> workQueue;

    public WorkThread(Queue<Runnable> workQueue) {
        this.workQueue = workQueue;
    }

    @Override
    public void run() {
        while(true) {
            synchronized (workQueue) {
                if(!workQueue.isEmpty()) {
                    Runnable r = workQueue.poll();
                    // NPE 발생해서 위에서 synchronized 추가
                    r.run();
                }
            }

        }
    }
}

