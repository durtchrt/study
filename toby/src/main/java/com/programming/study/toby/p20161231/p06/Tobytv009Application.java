package com.programming.study.toby.p20161231.p06;

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

import io.netty.channel.nio.*;

@SpringBootApplication
public class Tobytv009Application {

    public static final String URL1 = "http://localhost:8081/service?req={req}";
    public static final String URL2 = "http://localhost:8081/service2?req={req}";

    @RestController
    public static class MyController {
        @Autowired MyService myService;

        //netty는 프로세스 갯수 * 2가 기본 thread 갯수 정책을 가짐
        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));

        @GetMapping("/rest")
        public DeferredResult<String> rest(int idx) {
            DeferredResult<String> dr = new DeferredResult<>();
            ListenableFuture<ResponseEntity<String>> f1 = rt.<String>getForEntity(URL1, String.class, "hello" + idx);
            //callback hell 이미지 참조
            //https://pbs.twimg.com/media/Cu2so4eUMAAfDl7.jpg
            //비동기 작업을 순차적으로 처리라는 장점이 있지만
            //순차적이 아닌 병렬적으로 처리하는 경우 쉽지 않고
            //매번 에러를 콜백 정의해야하는 단점이 생김.

            //JDBC는 스펙정의 자체가 blocking
            //현재 자바의 JDBC를 가지고 nonblocking은 불가능
            //nonblocking으로 jdbc드라이버를 제공하는 것이(ex- mongodb) 있긴하지만 어려움.
            //오라클이 nonblocking jdbc 를 만들기로함 (async jdbc spec)
            //java9에는 못들어감.

            //springdata는 nosql쪽은 비동기로 처리하는 코드를 볼 수 있음.
            f1.addCallback( s-> {
                ListenableFuture<ResponseEntity<String>> f2 = rt.<String>getForEntity(URL2, String.class, s.getBody());
                f2.addCallback(s2 -> {
                    ListenableFuture<String> f3 = myService.work(s2.getBody());
                    f3.addCallback(s3 -> {
                        dr.setResult(s3);
                    }, e -> {
                        dr.setErrorResult(e.getMessage());
                    });

                }, e-> {
                    dr.setErrorResult(e.getMessage());
                });
            }, e-> {
                dr.setErrorResult(e.getMessage());
            });
            return dr;
        }
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
