package com.programming.study.toby.p20170107.p03;

import org.springframework.beans.factory.annotation.*;
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.*;
import org.springframework.http.*;
import org.springframework.http.client.*;
import org.springframework.scheduling.annotation.*;
import org.springframework.scheduling.concurrent.*;
import org.springframework.stereotype.*;
import org.springframework.util.concurrent.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.*;
import org.springframework.web.context.request.async.*;

import java.util.function.*;

import io.netty.channel.nio.*;

@SpringBootApplication
public class Tobytv010Application {

    public static final String URL1 = "http://localhost:8081/service?req={req}";
    public static final String URL2 = "http://localhost:8081/service2?req={req}";

    @RestController
    public static class MyController {
        @Autowired MyService myService;

        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));

        @GetMapping("/rest")
        public DeferredResult<String> rest(int idx) {
            DeferredResult<String> dr = new DeferredResult<>();

            Completion
                    .from(rt.getForEntity(URL1, String.class, "hello" + idx))
                    .andApply(s -> rt.getForEntity(URL2, String.class, s.getBody()))
                    .andApply(s -> myService.work(s.getBody()))
                    .andError(e -> dr.setErrorResult(e.toString()))
                    //TODO
                    .andAccept(s -> dr.setResult(s.getBody()));
            // 콜백대신 체이닝을 사용해서 같은 계층으로 처리




//            ListenableFuture<ResponseEntity<String>> f1 = rt.<String>getForEntity(URL1, String.class, "hello" + idx);

//            f1.addCallback( s-> {
//                ListenableFuture<ResponseEntity<String>> f2 = rt.<String>getForEntity(URL2, String.class, s.getBody());
//                f2.addCallback(s2 -> {
//                    ListenableFuture<String> f3 = myService.work(s2.getBody());
//                    f3.addCallback(s3 -> {
//                        dr.setResult(s3);
//                    }, e -> {
//                        dr.setErrorResult(e.getMessage());
//                    });
//
//                }, e-> {
//                    dr.setErrorResult(e.getMessage());
//                });
//            }, e-> {
//                dr.setErrorResult(e.getMessage());
//            });
            return dr;
        }
    }

    public static class Completion<S, T> {
        Completion next;
        Consumer<ResponseEntity<String>> con;
        Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn;

        public Completion() { }

        public Completion(Consumer<ResponseEntity<String>> con) {
            this.con = con;
        }

        public Completion(Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn) {
            this.fn = fn;
        }


        // TODO
        public Completion<T> andError(Consumer<Throwable> econ) {
            Completion<T, T> con = new ErrorCompletion<>(econ);
            // TODO
            con.run(econ);
        }


        // TODO
        public <V> Completion andApply(Function<S, ListenableFuture<V> fn) {
            Completion c = new ApplyCompletion(fn);
            this.next = c;
            return c;
        }

        public static <S, T> Completion from(ListenableFuture<T> lf) {
            //TODO
            Completion<S, T> c = new AcceptCompletion();
            lf.addCallback(s -> {
                c.complete(s);
            } , e -> {
                c.error(e);
            });
            return c;
        }

        public void andAccept(Consumer<T> con) {
            Completion<T> c = new AcceptCompletion(con);
            this.next = c;
        }

        void complete(T s) {
            if (next != null) {
                next.run(s);
            }
        }

        void run(S value) {

        }

        void error(Throwable e) {
            if (next != null) {
                next.error(e);
            }
        }

    }

    public static class ErrorCompletion extends Completion {
        public Consumer<Throwable> econ;
        public ErrorCompletion(Consumer<Throwable> econ) {
            this.econ = econ;
        }
        @Override
        void run(ResponseEntity<String> value) {
            if (next != null) {
                next.run(value);
            }
        }

        @Override
        void error(Throwable e) {
            econ.accept(e);
        }
    }

    public static class AcceptCompletion<S> extends Completion<S, Void> {
        public Consumer<S> con;
        public AcceptCompletion(Consumer<S> con) {
            this.con = con;
        }
        @Override
        void run(S value) {
            con.accept(value);
        }
    }

    public static class ApplyCompletion<S, T> extends Completion<S, T> {
        public Function<S, ListenableFuture<T>> fn;

        public ApplyCompletion(Function<S, ListenableFuture<T>> fn) {
            this.fn = fn;
        }

        @Override
        void run(T value) {
            ListenableFuture<ResponseEntity<String>> lf = fn.apply(value);
            lf.addCallback(s ->  this.complete(s), e ->  error(e));
        }
    }

    @Service
    public static class MyService {
        public ListenableFuture<String> work(String req) {
            return new AsyncResult<>(req + "/asyncwork");
        }
    }


    @Bean
    ThreadPoolTaskExecutor myTreadPool() {
        ThreadPoolTaskExecutor te = new ThreadPoolTaskExecutor();
        te.setCorePoolSize(1);
        te.setMaxPoolSize(1);
        te.initialize();
        return te;
    }



    public static void main(String[] args) {
        SpringApplication.run(Tobytv010Application.class, args);

    }
}
