package com.programming.study.toby.p20161231.p01;

import com.sun.javafx.runtime.*;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.*;

@SpringBootApplication
public class Tobytv009Application {
    /*
    LinkedIn -  Thread Pool Hell
    쓰레드풀이 꽉차나 상태에서 다른 응답이 오면 대기상태가 되는 상태
    -> latency(지연시간)가 급격하게 높아집 -> 사용자 불만.

    http://www.slideshare.net/brikis98/the-play-framework-at-linkedin/78-Internet_LoadBalancerFrontendServerFrontendServerFrontendServerBackendServerBackendServerBackendServerBackendServerBackendServerDataStoreDataStoreDataStoreDataStoreAnd_there

    front -> backend에게 작업을 시키고 front thread는 기다리는 상태가 되서 문제가 됨

    thread pool은 꽉차지만 thread는 놀고 있는 상황

    thread는 무겁고 컨텍스트 스위칭도 자원을 많이 사용.
    blocking 상태에 있는 Thread는 최소 2번씩 발생



    JMC - java machine control
    -> 개발일때는 무료.

    TODO
    왜 톰캣 쓰레드가 1개로 제한되지 않지? 프로젝트 구조를 좀 변경해야할듯...


    */



    @RestController
    public static class MyController {

        RestTemplate rt = new RestTemplate();

        @GetMapping("/rest")
        public String rest(int idx) {
            String res = rt.getForObject("http://localhost:8081/service?req={req}", String.class, "hello" + idx);

            return "rest / "+ idx +  "/"+ res; //text/html
        }
    }


    public static void main(String[] args) {
        //application.properties 오버라이트
        System.setProperty("server.tomcat.max-threads", "1");
        SpringApplication.run(Tobytv009Application.class, args);

    }
}
