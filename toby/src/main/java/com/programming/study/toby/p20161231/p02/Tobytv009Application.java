package com.programming.study.toby.p20161231.p02;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.http.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.*;

@SpringBootApplication
public class Tobytv009Application {

    @RestController
    public static class MyController {

//        RestTemplate rt = new RestTemplate();
        //spring 4.0에서 나온 async
        AsyncRestTemplate rt = new AsyncRestTemplate();

        @GetMapping("/rest")
        public ListenableFuture<ResponseEntity<String>> rest(int idx) {
            //callback 등록할수 있는 future
            //springmvc 가 알아서 콜백 등록
            //새로운 thread를 매번 만드는 문제가 있음
            //바람직한 상황이 아님.
            return rt.<String>getForEntity("http://localhost:8081/service?req={req}", String.class, "hello" + idx);
        }
    }


    public static void main(String[] args) {
        //application.properties 오버라이트
//        System.setProperty("server.tomcat.max-threads", "1");
        SpringApplication.run(Tobytv009Application.class, args);

    }
}
