package com.programming.study.toby.p20161217.p16;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.*;
import org.springframework.web.servlet.mvc.method.annotation.*;

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

        @GetMapping("/emitter")
        public ResponseBodyEmitter emitter() {
            ResponseBodyEmitter emitter = new ResponseBodyEmitter();
            Executors.newSingleThreadExecutor().submit( ()-> {
                try{
                    for (int i = 0; i <= 50 ; i++) {
                        emitter.send(String.format("<p>%i</p>", i ));
                        Thread.sleep(100);
                    }
                } catch(Exception e) {
                }

            });
            return emitter;
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
