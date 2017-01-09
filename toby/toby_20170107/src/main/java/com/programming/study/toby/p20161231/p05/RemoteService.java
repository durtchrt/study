package com.programming.study.toby.p20161231.p05;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@SpringBootApplication
@Slf4j
public class RemoteService {


    @RestController
    public static class MyController {
        @GetMapping("/service")
        public String serivce(String req) throws InterruptedException {
            log.info("--> {}", req);
            TimeUnit.SECONDS.sleep(2);
            return req + "/service1"; //text/html
        }

        @GetMapping("/service2")
        public String serivce2(String req) throws InterruptedException {
            log.info("--> {}", req);
            TimeUnit.SECONDS.sleep(2);
            return req + "/service"; //text/html
        }
    }


    public static void main(String[] args) {
        System.setProperty("SERVER_PORT", "8081");
        System.setProperty("server.tomcat.max-threads", "1000");
        SpringApplication.run(RemoteService.class, args);
    }
}
