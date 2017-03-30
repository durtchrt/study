package study.thread.p03;

import java.util.*;

public class ThreadPoolUpgradeExample {

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

        //java.lang.IllegalMonitorStateException
        synchronized( notifier ) {
            notifier.notify();
        }
    }

}

class WorkThread extends Thread {
    Queue<Runnable> workQueue;
    Object notifier;

    public WorkThread(Queue<Runnable> workQueue, Object notifier) {
        this.workQueue = workQueue;
        this.notifier = notifier;
    }

    @Override
    public void run() {
        while(true) {
            if(!workQueue.isEmpty()) {
                Runnable r = workQueue.poll();
                r.run();
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

