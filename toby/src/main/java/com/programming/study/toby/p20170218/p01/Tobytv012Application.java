package com.programming.study.toby.p20170218.p01;


import java.util.concurrent.*;

import lombok.extern.slf4j.*;

/*
 *
 * Java 8의 CompletableFuture 학습
 * 들어가기 앞서 기존 수업 복습
 *
 *
 */

@Slf4j
public class Tobytv012Application {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
//        Future f;
        //간단히 비동기 작업의 결과물을 만들수 있음
        CompletableFuture<Integer> cf1 = CompletableFuture.completedFuture(1);
        System.out.println(cf1.get());


        CompletableFuture<Integer> cf2 = new CompletableFuture<>();
        cf2.complete(2);
        System.out.println(cf2.get());

        try {
            CompletableFuture<Integer> cf3 = new CompletableFuture<>();
            cf3.completeExceptionally(new RuntimeException());
            System.out.println(cf3.get());
        }catch (Exception e) {
            log.error("-->{}", e);
        }

        //백그라운드에서 동작하는 쓰레드에서 동작하는 CF
        CompletableFuture.runAsync(() -> log.info("runAsync"));

        // CompletionStage의 장점은 디버깅을 했을때 기존의  thread 코딩에 비해서 core의 성능을 덜 잡아 먹음 - 최소 20%
        // 동일한 비동기 처리시 cpu 점유율리 적이진다
        // 메인 쓰레드에서 이벤트를 체크할 경우 cpu 점유율이 상당히 높다 이런 단점을 보강하기 위해 비동기 코딩이 필요

        //single CompletableFuture에서 에러 핸들링

//        CompletionStage
        //하나의 비동기작업을 수행을하고 완료후 다른 작업이 수차적으로 수행이 될수 있도록 구현이 되어있는것
        //하나의 비동기 작업에 의존적인 작업이 끝난후 작업해라 가능
        //두개이상의 비동기 작업을 동시에 끝나고 조합 또는 맨처음에 나온것만 수행 나온것은 무시 -> 다양하게 처리 가능
        //CompletionStage 방식이 콜백보다 신경 쓸게 적어진다
        CompletableFuture
            .runAsync(() -> log.info("runAsync"))
            .thenRun(() -> log.info("thenRun"))
            .thenRun(() -> log.info("thenRun"));

        CompletableFuture
            .supplyAsync(() -> {
                log.info("runAsync");
                return 1;
            })
            .thenApply(s -> {
                log.info("thenRun {}", s);
                //그냥 completableFuture로 던지면 int에서 타입이 바뀜
                //thenComponse를 사용해야함
//                return CompletableFuture.completedFuture(s + 1);
                return s + 1;
            })
            .thenCompose(s -> {
                log.info("thenCompose {}", s);
                return CompletableFuture.completedFuture(s + 2);
            })
            .thenApply(s2 -> {
                log.info("thenRun {}", s2);
                return s2 * 3;
            })
            .thenAccept(s2 -> log.info("thenAccept {}", s2));

         //executorService는 코어의 갯수가 중요한데 - 참고로 AWS의 코어 갯수는 하이퍼쓰레딩을 코어로 표현해서 실제 코어랑 맞지 않음.
         ExecutorService es = Executors.newFixedThreadPool(10);
         // 예외처리 - 1. 끝까지 넘기기 2. 적당한 값으로 변경해서 다음 단계로 전달
         CompletableFuture
            .supplyAsync(() -> {
                log.info("runAsync 2");
                return 1;
            })
            //CompletableFuture가 사용하는 쓰레드가 아닌 새로운 쓰레드에서 동작하고 싶을때
             .thenApplyAsync(s2 -> {
                log.info("thenApplyAsync {}", s2);
                return s2 * 3;
            }, es)
            //원래의 쓰레드로 돌아옴.
            .thenApply(s -> {
                log.info("thenApply {}", s);
                return s + 1;
            })
            //에러 처리용 에러 발생
            .thenApply(s2 -> {
                log.info("thenApply {}", s2);
                if( 1 == 1) throw new RuntimeException();
                return s2 * 3;
            })

            // 에러인경우 다음에 -10을 인자로 전달
            .exceptionally(e -> -10)
            .thenAccept(s2 -> log.info("exception thenAccept {}", s2));

         //CompletableFuture가 호응이 좋아서인지 인터넷에 블로깅된게 많으니 참조
         //재밌는 예제로 tail call Optimizing을 CF를 활용해서 최적화 시도
         //java 9에서 비동기 코드 발전에 신경을 쓰는지 8보다도 사용성이라든지 성능이 더 좋아졌다고함





        log.info("exit");
        es.shutdown();
        es.awaitTermination(10, TimeUnit.SECONDS);
//        ForkJoinPool.commonPool().shutdown();
//        ForkJoinPool.commonPool().awaitTermination(10, TimeUnit.SECONDS);



    }
}
