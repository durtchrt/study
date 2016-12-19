package com.programming.study.toby.p20161217.p10;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.context.annotation.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;

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

        // ListenableFuture - spring 4.0부터 사용 가능
        // java8의 CompletableFuture 아주 매력적이라고함.
        @Async    // <- @Async는 요청때마다 쓰레드를 만들어서 비효율적임
        public ListenableFuture<String> hello() throws InterruptedException {
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
            ListenableFuture<String> f = myService.hello();
            f.addCallback(s -> log.info(s), e -> log.info(e.getMessage()));
            log.info("exit");
        };
    }
}
