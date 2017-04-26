package examples.p00.threadmain5;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class ThreadMain {

    public static void main(String[] args) throws InterruptedException, ExecutionException {
//        Callable<Result> callable = new Callable<Result>() {
//            @Override
//            public Result call() throws Exception {
//                return getAPI();
//            }
//        };
//        ExecutorService es = Executors.newSingleThreadExecutor();
//        Future<Result> future = es.submit(callable);
//        Result result = future.get();
//        System.out.println(result);
//        es.shutdown();



//        Result result = CompletableFuture
//                .completedFuture("Hello KSUG!!!")
//                .thenApply(ThreadMain::getFirstAPI)
//                .thenApplyAsync(ThreadMain::getSecondAPI)
//                .get();
//        System.out.println(result);

        CompletableFuture<String> cf1 = CompletableFuture.completedFuture("Hello");
        CompletableFuture<String> cf2 = CompletableFuture.completedFuture("KSGU");
        CompletableFuture<String> cf3 = CompletableFuture.completedFuture("!!!");
        String msg = cf1.thenCombine(cf2, (x, y) -> x + " " + y)
                .thenCombine(cf3, (x, y) -> x + y)
                .get();
        System.out.println(msg);

        CompletableFuture<String> cf = new CompletableFuture<>();
        new Thread(() -> cf.complete("Hello KSUG!!!"))
            .start();
        String result = cf.get();
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

    static Result getFirstAPI(String message) {
        log.info("getFirstAPI");
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
        return new Result();
    }

    static Result getSecondAPI(Result r) {
        log.info("getSecondAPI");
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
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

