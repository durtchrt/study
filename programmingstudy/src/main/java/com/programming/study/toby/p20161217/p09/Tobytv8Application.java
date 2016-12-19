package com.programming.study.toby.p20161217.p09;

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
@EnableAsync
public class Tobytv8Application {
    @Component
    public static class MyService {
        // TODO: 2016. 12. 17.
        // @EnableAsync을 사용해도 thread가 main에서 실행됨.
        // 확인 필요
        @Async
        public Future<String> hello() throws InterruptedException {
            TimeUnit.SECONDS.sleep(1);
            return new AsyncResult<>("hello");
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
            Future<String> f = myService.hello();
            log.info("exit : " + f.isDone()); // 10년전에는 IO처럼 오래 걸리는 작업에서 실제로 IO를 체크하는게 아니고 IO 비지니스 로직을 감싸는 Future 객체의 isDone을 체크해서 완료 여부를 체크를 함
            log.info("result: " + f.get());
        };
    }
}
