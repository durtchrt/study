package com.programming.study.toby.p20161217.p12;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.context.annotation.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.concurrent.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@SpringBootApplication
@Slf4j
@EnableAsync
public class Tobytv8Application {
    /*

Servlet 3.0 비동기 서블릿
    - http conenection은 임 논블록킹 IO
    - 서블릿 요청 읽기 응답 쓰기는 블록킹
    - 비동기 작업 시작 즉시 서블릿 쓰레드 반납
    - 비동기 작업이 완료되면 서블릿 쓰레드 재할당
    - 비동기 서블릿 컨텍스트 이용 (AsyncContext)

Servlet 3.1: 논블록킹 IO
    - 논블록킹 서블릿 요청, 응답 처리
    - Callback


InputStream/OutputStream - 블럭킹 방식임 <- 서블릿은 이것을 사용했기 때문에 블럭킹

Servlet 3.0은 NIO를 사용해도 request마다 thread를 생성
request    ServletThread
1          ST1           - req -> blocking IO (DB, API...) -> res(html)
2          ST2           - req -> CPU Bound(Work Thread) -> res(html)
3    NIO   ST3
4          ST4
.................

default thread 200개

cpu 사용이 많은것은 문제가 없는데
불필요하게 thread를 잡아먹는 녀석이 생기면
쓰레드 풀이 한계를 채워서

스레드를 무한정 만들면
쓰레드 자체도 메모리를 차지하기 때문에 out of memory 생김
컨텍스트 스위칭에 자원 많이 사용해서 응답, 처리율 떨어짐


     */

    @RestController
    public static class  MyController {
        @Autowired MyService myService;

        @GetMapping("/async")
        public String async() throws InterruptedException {
            Thread.sleep(2000);
            return "hello";
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
        SpringApplication.run(Tobytv8Application.class, args);
    }

}
