package examples.p00.threadmain6;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class ThreadMain {

    public static void main(String[] args) throws InterruptedException, ExecutionException {

        ExecutorService es = Executors.newFixedThreadPool(10);

        Future<Result> firstFuture = es.submit(new Callable() {
            @Override
            public Object call() throws Exception {
                Result firstResult = getFirstAPI("Hello KSUG!!!");
                Future secondFuture = es.submit(new Callable() {
                    @Override
                    public Object call() throws Exception {
                        Result secondResult = getSecondAPI(firstResult);
                        Future thirdFuture = es.submit(new Callable() {
                            @Override
                            public Object call() throws Exception {
                                return getThirdAPI(secondResult);
                            }
                        });
                        return thirdFuture.get();
                    }
                });
                return secondFuture.get();
            }
        });

        Result result = firstFuture.get();
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

    static Result getThirdAPI(Result r) {
        log.info("getThirdAPI");
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

