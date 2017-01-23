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
@EnableAsync   // <- @Async를 댜른 Thread에서 실행될 수 있도록 어노테이션 추가
public class Tobytv8Application {

     /**
      *
      *  Service를 새로운 Thread에서 동작 시키기 위해 @EnableAsync를 추가한 예
      *
      */

    @Component
    public static class MyService {
        @Async
        public Future<String> hello() throws InterruptedException {
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
            Future<String> f = myService.hello();
            log.info("exit : " + f.isDone()); // 10년전에는 IO처럼 오래 걸리는 작업에서 실제로 IO를 체크하는게 아니고 IO 비지니스 로직을 감싸는 Future 객체의 isDone을 체크해서 완료 여부를 체크를 함
            log.info("result: " + f.get());
        };
    }
}
