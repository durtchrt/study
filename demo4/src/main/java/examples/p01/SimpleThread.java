package examples.p01;

import lombok.*;

public class SimpleThread {
    @SneakyThrows
    public static void main(String[] args) throws InterruptedException {
        String message = "Hello KSUG";
        ThreadSample t1 = new ThreadSample(message);

        // main thread가 중요한 이유
//        t1.setDaemon(true);
        t1.start();
//        t1.join();

        Thread t2 = new Thread(new Runnable() {
            @Override
            @SneakyThrows
            public void run() {
                Thread.sleep(100);
                System.out.println("==============================");
                System.out.println("message from Runnable: " + message);
                System.out.println("==============================");

                Thread t = Thread.currentThread();
                long id = t.getId();
                String name = t.getName();
                int priority = t.getPriority();
                Thread.State state = t.getState();
                ThreadGroup threadGroup = t.getThreadGroup();
                String groupName = threadGroup.getName();
                ThreadGroup parent = t.getThreadGroup().getParent();
                String parentName = parent.getName();

                System.out.println("id: " + id);
                System.out.println("namd :" + name);
                System.out.println("priority: " + priority);
                System.out.println("state: " + state);
                System.out.println("threadGroup.name : " + groupName);
                System.out.println("parentName : " + parentName);

                Thread.sleep(1000);
            }
        });
//        t2.setDaemon(true);

        t2.start();
//        t2.join();

        System.out.println("exit main thread");
    }

}

class ThreadSample extends Thread {

    private String message;

    public ThreadSample(String message) {
        this.message = message;
    }

    @Override
    @SneakyThrows
    public void run() {
        Thread.sleep(500);
        System.out.println("==============================");
        System.out.println("message from ThreadSample: " + message);
        System.out.println("==============================");


        Thread t = Thread.currentThread();
        long id = t.getId();
        String name = t.getName();
        int priority = t.getPriority();
        State state = t.getState();
        ThreadGroup threadGroup = t.getThreadGroup();
        String groupName = threadGroup.getName();
        ThreadGroup parent = t.getThreadGroup().getParent();
        String parentName = parent.getName();

        System.out.println("id: " + id);
        System.out.println("namd :" + name);
        System.out.println("priority: " + priority);
        System.out.println("state: " + state);
        System.out.println("threadGroup.name : " + groupName);
        System.out.println("parentName : " + parentName);

        Thread.sleep(1000);
    }
}
