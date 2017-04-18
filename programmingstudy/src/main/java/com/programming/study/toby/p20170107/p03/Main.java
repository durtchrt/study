package com.programming.study.toby.p20170107.p03;

import org.springframework.http.*;
import org.springframework.http.client.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.client.*;

import io.netty.channel.nio.*;

public class Main {
    public static void main(String[] args) {
        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));
        ListenableFuture<ResponseEntity<String>> f = rt.getForEntity("http://m.daum.net", String.class);
        f.addCallback(s -> {
            while(true){
                try {
                    Thread.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
//            System.out.println(s);
        }, e->{});
    }

}
