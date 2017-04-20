package examples.p00.threadmain3;

import java.util.*;

public class ThreadMain {

    public static void main(String[] args) throws InterruptedException {
        Map map = new HashMap();

        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                Result result = getAPI();
                map.put("API", result);
                /*synchronized (map) {
                    map.notify();
                }*/
            }
        });
        thread.start();
        if(map.get("API") == null) {
            synchronized (map) {
                map.wait();
            }
        }
        System.out.println(map.get("API"));
    }



    static Result getAPI() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
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

