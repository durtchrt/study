package com.service;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.*;

import java.io.*;
import java.time.*;
import java.util.*;
import java.util.concurrent.*;

@SpringBootApplication
@Controller
public class ServiceApplication {

    @RequestMapping("/events")
    public SseEmitter handleRequest () {
        final SseEmitter emitter = new SseEmitter();
        ExecutorService service = Executors.newSingleThreadExecutor();
        service.execute(() -> {
            for (int i = 0; i < 1000; i++) {
                try {
                    emitter.send(new Event(System.currentTimeMillis(), new Date()).toString() ,
                                    MediaType.TEXT_PLAIN);
                    Thread.sleep(1000);
                } catch (Exception e) {
                    e.printStackTrace();
                    emitter.completeWithError(e);
                    return;
                }

            }
            emitter.complete();
        });
        return emitter;
    }


    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class);
    }
}

