package com.programming.study.toby.p20161217.p08;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.context.annotation.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@SpringBootApplication
@Slf4j
public class Tobytv8Application {
    @Component
    public static class MyService {
        public String hello() throws InterruptedException {
            TimeUnit.SECONDS.sleep(1);
            return "hello";
        }

    }

    public static void main(String[] args) {
        log.debug("hello()");
        try (ConfigurableApplicationContext c = SpringApplication.run(Tobytv8Application.class, args)) {

        }
    }

    @Autowired MyService myService;

    @Bean
    ApplicationRunner run() {
        return args -> {
            log.info("run()");
            String res = myService.hello();
            log.info("exit : " + res);
        };
    }
}
