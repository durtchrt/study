package examples.p00;

import org.springframework.web.client.*;

import java.util.*;

public class ThreadMain {

    public static void main(String[] args) throws InterruptedException {

        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("run");
                Result result = getAPI();
            }
        });
        thread.start();
        System.out.println("main");

    }

    static Result getAPI() {
        return new Result();
    }

    public void printMain() {
        System.out.println(Thread.currentThread() + " thread running");
    }
}

class Result {}

class ThreadExample {
    public void depthOne() {
        depthTwo();
    }

    private void depthTwo() {
        System.out.println(Thread.currentThread() + " thread running");
    }
}

