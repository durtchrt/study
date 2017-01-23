package com.programming.study.toby.p20161217.p05;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@Slf4j
public class CallbackEx {
    /**
     *
     *  Callback을 구현할때는 Future에 간단히 done 메서드만 오버라드드 후 get() 이후 동작을 작성해주면 심플하게 만들 수 있다
     *
     */

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        FutureTask<String> f = new FutureTask<String>(()-> {
            Thread.sleep(2000);
            log.info("Async");
            return "Hello";
        }){
            @Override
            protected void done() {
                try {
                    System.out.println(get());
                } catch (InterruptedException | ExecutionException e) {
                    e.printStackTrace();
                }
            }
        };

        es.execute(f);
        es.shutdown();

    }
}
