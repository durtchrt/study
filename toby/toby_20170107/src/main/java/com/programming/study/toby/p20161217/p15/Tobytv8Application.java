package com.programming.study.toby.p20161217.p15;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.*;

import java.util.*;
import java.util.concurrent.*;

import lombok.extern.slf4j.*;

@SpringBootApplication
@Slf4j
//@EnableAsync
public class Tobytv8Application {

    @RestController
    public static class  MyController {
        Queue<DeferredResult<String>> results = new ConcurrentLinkedQueue<>();

        // TODO: 2016. 12. 18.
        //DefferedResut 좀 더 찾아보기
        //DefferedResult - 워커 쓰레드가 따로 만들어지지 않고 클라이언트를 대기상태로 만들수 있음 이벤트를 주면 해당 클라이언트에게 이벤트 전달.
        // 쓰레드를 사용하지않고 최소한의 자원으로 응답 처리.
        @GetMapping("/dr")
        public DeferredResult<String> callable() {
            log.info("dr");
            DeferredResult<String> dr = new DeferredResult<>(6000000L);
            results.add(dr);
            return dr;
        }

        @GetMapping("/dr/count")
        public String drCount() {
            return String.valueOf(results.size());
        }

        @GetMapping("/dr/event")
        public String drEvent(String msg) {
            for (DeferredResult<String> dr : results) {
                dr.setResult("Hello " + msg);
                results.remove(dr);
            }
            return "OK";
        }

    }

    public static void main(String[] args) {
        log.debug("hello()");
        ConfigurableApplicationContext context = SpringApplication.run(Tobytv8Application.class, args);
    }

}
