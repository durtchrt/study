package com.programming.study.toby.p20161217.p14;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@SpringBootApplication
@Slf4j
//@EnableAsync
public class Tobytv8Application {

    /**
     *
     *  application.properties에서 server.threadpool 갯수를 20개로 막아야하는데
     *  설정을 나중에 변경...;;
     *
     *
     */

    @RestController
    public static class  MyController {
        @Autowired MyService myService;

        // TODO: 2016. 12. 17.
        // 제대로 동작 안하는 듯 수정!!!
        // 1시간 40분쯤

        @GetMapping("/callable")
        public String callable() throws InterruptedException {
            Thread.sleep(2000);
            return "hello";
        }

        @GetMapping("/async")
        public Callable<String> async() throws InterruptedException {
            log.info("callable");
            return () -> {
                Thread.sleep(2000);
                 return "hello";
            };
        }
    }

    @Component
    public static class MyService {
        public ListenableFuture<String> hello() throws InterruptedException {
            TimeUnit.SECONDS.sleep(1);
            return new AsyncResult<>("hello");
        }
    }

    public static void main(String[] args) {
        log.debug("hello()");
        ConfigurableApplicationContext context = SpringApplication.run(Tobytv8Application.class, args);
    }

}
