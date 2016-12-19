package com.programming.study.toby.p20161217.p06;

import java.util.*;
import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class CallbackEx {
    interface SuccessCallback {
        void onSuccess(String result);
    }
    public static class CallbackFutureTask extends FutureTask<String> {
        SuccessCallback sc;
        public CallbackFutureTask(Callable<String> callable, SuccessCallback sc) {
            super(callable);
            this.sc = Objects.requireNonNull(sc); // null이면 throw NPE
        }
        //callback method - 10년전 스타일임 현재는 더 편하게 함.
        @Override
        protected void done() {
            try {
                sc.onSuccess(get());
            } catch (InterruptedException | ExecutionException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        CallbackFutureTask f = new CallbackFutureTask( () -> {
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        }, System.out::println);

        es.execute(f);
        es.shutdown();
    }
}
