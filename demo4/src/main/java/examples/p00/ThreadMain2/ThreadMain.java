package examples.p00.ThreadMain2;

import java.util.*;

public class ThreadMain {

    public static void main(String[] args) throws InterruptedException {
        Map map = new HashMap();

        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                Result result = getAPI();
                map.put("API", result);
            }
        });
        thread.start();
        System.out.println(map.get("API"));

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

