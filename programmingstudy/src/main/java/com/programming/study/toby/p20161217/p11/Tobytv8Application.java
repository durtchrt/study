package com.programming.study.toby.p20161217.p11;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.context.annotation.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.concurrent.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@SpringBootApplication
@Slf4j
@EnableAsync
public class Tobytv8Application {
    /**
     *   @Async 사용시 ThreadPool 사용하기위한 수정
     */
    @Component
    public static class MyService {

        @Async("tp") // executor bean name
        public ListenableFuture<String> hello() throws InterruptedException {
            TimeUnit.SECONDS.sleep(1);
            return new AsyncResult<>("hello");
        }

    }

    @Bean // <- 이렇게 Executor 타입의 Bean이 있는 경우 @Async는 Thread pool을 사용함
    ThreadPoolTaskExecutor tp() {
        ThreadPoolTaskExecutor te = new ThreadPoolTaskExecutor();
        te.setCorePoolSize(10); // 0인경우 무한대 <- 좀 더 찾아봐서 알려준다고함
        te.setMaxPoolSize(100);
        te.setQueueCapacity(200);
        // pool 늘어나는 순서 corepoolsize -> queuecapacity -> maxpoolsize
        // TODO: 2016. 12. 17.
        //왜 maxpool은 100, queueCapacity는 200?
//        te.setTaskDecorator(); <- 쓰레드 통계 내기 좋은 메서드

        te.setThreadNamePrefix("mytread");
        te.initialize();

        return te;
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
