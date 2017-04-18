package com.client;

import reactor.core.publisher.*;
import reactor.ipc.netty.http.client.*;

public class ClientMain {
    public static void main(String[] args) {
        HttpClient httpClient = HttpClient.create();
        Mono<HttpClientResponse> m = httpClient.get("http://m.daum.net");
        m.subscribe(x -> System.out.println(x.status()));
    }
}
