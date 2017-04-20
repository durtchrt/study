package examples.p00.threadmain4;

import java.util.*;
import java.util.concurrent.*;

public class ThreadMain {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        Future<Result> future = new FutureTask<>(new Callable<Result>() {
            @Override
            public Result call() throws Exception {
                return getAPI();
            }
        });
        Result result = future.get();
        System.out.println(result);
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

