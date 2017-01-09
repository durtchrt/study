package com.programming.study.toby.p20161231.p07;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.*;
import org.springframework.http.*;
import org.springframework.http.client.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.concurrent.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.*;
import org.springframework.web.context.request.async.*;

import java.util.concurrent.*;

import io.netty.channel.nio.*;

@SpringBootApplication
public class Tobytv009Application {

    public static final String URL1 = "http://localhost:8081/service?req={req}";
    public static final String URL2 = "http://localhost:8081/service2?req={req}";

    @RestController
    public static class MyController {
        @Autowired MyService myService;
        @Autowired ThreadPoolTaskExecutor te;

        //netty는 프로세스 갯수 * 2가 기본 thread 갯수 정책을 가짐
        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));
        <T> CompletableFuture<T> convertCompletableFuture(ListenableFuture<T> f) {
            return CompletableFuture.supplyAsync(() -> {
               try{
                   return f.get();
               }catch (InterruptedException | ExecutionException e){
                   throw new RuntimeException(e);
               }
            });
        }


        /*

        Callback hell을 java8의 CompletableFuture로 해결할수 있다
        아래의 코드는 오류가 나서 주석으로
         */
      /*  @GetMapping("/rest")
        public CompletableFuture<ResponseEntity<String>> rest(int idx) {
            DeferredResult<String> dr = new DeferredResult<>();
            ListenableFuture<ResponseEntity<String>> f1 = rt.<String>getForEntity(URL1, String.class, "hello" + idx);
            CompletableFuture<ResponseEntity<String>> cf = convertCompletableFuture(f1);
            return cf.thenCompose( r -> convertCompletableFuture(rt.<String>getForEntity(URL2, String.class, r.getBody())))
                .thenApplyAsync( r -> myService.work(r.getBody()), te)
                .exceptionally(Throwable::getMessage);
        }*/
    }

    @Service
    public static class MyService {
        public ListenableFuture<String> work(String req) {
            return new AsyncResult<>(req + "/asyncwork");
        }
    }

    @Bean
    ThreadPoolTaskExecutor myTreadPool() {
        ThreadPoolTaskExecutor te = new ThreadPoolTaskExecutor();
        te.setCorePoolSize(1);
        te.setMaxPoolSize(1);
        te.initialize();
        return te;
    }



    public static void main(String[] args) {
        SpringApplication.run(Tobytv009Application.class, args);

    }
}
