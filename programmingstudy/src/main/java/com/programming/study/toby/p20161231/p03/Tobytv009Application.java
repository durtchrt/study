package com.programming.study.toby.p20161231.p03;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.http.*;
import org.springframework.http.client.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.*;

import io.netty.channel.nio.*;

@SpringBootApplication
public class Tobytv009Application {

    @RestController
    public static class MyController {


        //netty는 프로세스 갯수 * 2가 기본 thread 갯수 정책을 가짐
        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));

        @GetMapping("/rest")
        public ListenableFuture<ResponseEntity<String>> rest(int idx) {
//            Runtime.getRuntime().availableProcessors()
            return rt.<String>getForEntity("http://localhost:8081/service?req={req}", String.class, "hello" + idx);
        }
    }


    public static void main(String[] args) {
        SpringApplication.run(Tobytv009Application.class, args);

    }
}
