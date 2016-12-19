package com.programming.study.toby.p20161217.p07;

import java.nio.channels.*;
import java.util.*;
import java.util.concurrent.*;

import lombok.extern.slf4j.*;

/**
 * Future
 * Callback
 * 위의 두가지가 비동기 작업의 결과를 반환하는 기본적은 작업

 (참조)AsynchronousByteChannel
   (1) Callback 사용  - CompletionHandler
     <A> void read(ByteBuffer dst,
                  A attachment,
                  CompletionHandler<Integer,? super A> handler);
             CompletionHandler<Integer,? super A> handler
   (2) Future 사용
     Future<Integer> read(ByteBuffer dst);
             Future를 리턴하는 것을 볼 수 있음

 AsynchronousByteChannel의 코드를 살펴보면 callback과 future를 둘 다 사용하는 것을 볼 수 있음
 */


@Slf4j
public class CallbackEx {

    /**
     *
     * Callback 예제  - 성공 및 오류 처리 가능한 콜백
     *
     */

    interface SuccessCallback {
        void onSuccess(String result);
    }
    interface ExceptionCallback {
        void onError(Throwable t);
    }
    public static class CallbackFutureTask extends FutureTask<String> {
        SuccessCallback sc;
        ExceptionCallback ec;
        public CallbackFutureTask(Callable<String> callable, SuccessCallback sc, ExceptionCallback ec) {
            super(callable);
            this.sc = Objects.requireNonNull(sc); // null이면 throw NPE
            this.ec = ec;
        }
        //callback method - 10년전 스타일임 현재는 더 편하게 함.
        @Override
        protected void done() {
            try {
                sc.onSuccess(get());
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                //interrupted Exception은 시그널을 받은 것이기때문 일반적인 유저레벨 처리는 의미가 없다.
                // TODO: 2016. 12. 17
                // 43분쯤 방송을 다시 듣고 정리
            } catch (ExecutionException e) {
                ec.onError(e.getCause());
            }
        }
    }

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService es = Executors.newCachedThreadPool();

        CallbackFutureTask f = new CallbackFutureTask( () -> {
            Thread.sleep(2000);

            if(1 ==1) throw new RuntimeException("Async Error!!");

            log.info("Async");
            return "Hello";
        }, res ->  System.out.println("Result: " + res)
        , ex ->  System.out.println("Error: " + ex.getMessage()));

        es.execute(f);
        es.shutdown();
    }
}
