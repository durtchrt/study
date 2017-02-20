package com.programming.study.toby.p20170107.p01;

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

import java.util.function.*;

import io.netty.channel.nio.*;

@SpringBootApplication
public class Tobytv010Application {

    public static final String URL1 = "http://localhost:8081/service?req={req}";
    public static final String URL2 = "http://localhost:8081/service2?req={req}";

    @RestController
    public static class MyController {
        @Autowired MyService myService;

        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));

        @GetMapping("/rest")
        public DeferredResult<String> rest(int idx) {
            DeferredResult<String> dr = new DeferredResult<>();

            Completion
                    .from(rt.getForEntity(URL1, String.class, "hello" + idx))
                    .andApply(s -> rt.getForEntity(URL2, String.class, s.getBody()))
                    .andAccept(s -> dr.setResult(s.getBody()));
            // 콜백대신 체이닝을 사용해서 같은 계층으로 처리




//            ListenableFuture<ResponseEntity<String>> f1 = rt.<String>getForEntity(URL1, String.class, "hello" + idx);

//            f1.addCallback( s-> {
//                ListenableFuture<ResponseEntity<String>> f2 = rt.<String>getForEntity(URL2, String.class, s.getBody());
//                f2.addCallback(s2 -> {
//                    ListenableFuture<String> f3 = myService.work(s2.getBody());
//                    f3.addCallback(s3 -> {
//                        dr.setResult(s3);
//                    }, e -> {
//                        dr.setErrorResult(e.getMessage());
//                    });
//
//                }, e-> {
//                    dr.setErrorResult(e.getMessage());
//                });
//            }, e-> {
//                dr.setErrorResult(e.getMessage());
//            });
            return dr;
        }
    }

    public static class Completion {
        Completion next;
        Consumer<ResponseEntity<String>> con;
        Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn;

        public Completion() { }

        public Completion(Consumer<ResponseEntity<String>> con) {
            this.con = con;
        }

        public Completion(Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn) {
            this.fn = fn;
        }

        public Completion andApply(Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn) {
            Completion c = new Completion(fn);
            this.next = c;
            return c;
        }

        static Completion from(ListenableFuture<ResponseEntity<String>> lf) {
            Completion c = new Completion();
            lf.addCallback(s -> {
                c.complete(s);
            } , e -> {
                c.error(e);
            });
            return c;
        }

        public void andAccept(Consumer<ResponseEntity<String>> con) {
            Completion c = new Completion(con);
            this.next = c;
        }

        private void complete(ResponseEntity<String> s) {
            if (next != null) {
                next.run(s);
            }
        }

        private void run(ResponseEntity<String> value) {
            if (con != null) {
                con.accept(value);
            } else if( fn != null ) {
                ListenableFuture<ResponseEntity<String>> lf = fn.apply(value);
                lf.addCallback(s ->  complete(s), e ->  error(e));
            }
        }

        private void error(Throwable e) {

        }
    }

    @Service
    public static class MyService {
         @Async
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
        SpringApplication.run(Tobytv010Application.class, args);

    }
}
