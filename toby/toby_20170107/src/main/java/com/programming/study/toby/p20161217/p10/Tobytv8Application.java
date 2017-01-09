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
    /**
     *  Callback 처리를 위한 ListenableFuture 사용 예.
     */

    @Component
    public static class MyService {
        // ListenableFuture - spring 4.0부터 사용 가능  =>  Future 결과를 Callback 처리할 수 있음.
        // java8의 CompletableFuture 아주 매력적이라고함.
        @Async    // <- @Async는 요청때마다 쓰레드를 만들어서 비효율적임 -> TaskExecutor bean을 등록해주면 스프링이 자동으로 exeuctor를 사용한다
        public ListenableFuture<String> hello() throws InterruptedException {
            TimeUnit.SECONDS.sleep(1);
            log.info("Async hello()");
            return new AsyncResult<>("hello");
        }

    }

    public static void main(String[] args) {
        try (ConfigurableApplicationContext c = SpringApplication.run(Tobytv8Application.class, args)) { }
    }

    @Autowired MyService myService;

    @Bean
    ApplicationRunner run() {
        return args -> {
            log.info("run()");
            ListenableFuture<String> f = myService.hello();
            f.addCallback(s -> log.info("success callback: " + s), e -> log.info("error callback: " + e.getMessage()));
            log.info("exit");
        };
    }
}
