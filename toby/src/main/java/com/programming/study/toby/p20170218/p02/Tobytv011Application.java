package com.programming.study.toby.p20170218.p02;

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

import java.util.concurrent.*;
import java.util.function.*;

import io.netty.channel.nio.*;

@SpringBootApplication
public class Tobytv011Application {

    public static final String URL1 = "http://localhost:8081/service?req={req}";
    public static final String URL2 = "http://localhost:8081/service2?req={req}";

    @RestController
    public static class MyController {
        @Autowired MyService myService;

        AsyncRestTemplate rt = new AsyncRestTemplate(
                new Netty4ClientHttpRequestFactory(new NioEventLoopGroup(1)));

        @GetMapping("/rest")
        public DeferredResult<String> rest(int idx) {

            new Thread(new Runnable(){
                @Override
                public void run() {
                    System.out.println("hello");
                }
            });

            DeferredResult<String> dr = new DeferredResult<>();

            ExecutorService executorService = Executors.newCachedThreadPool();
            executorService.submit(() -> {});
//            ListenableFuture<ResponseEntity<String>> f1 = rt.<String>getForEntity(URL1, String.class, "hello" + idx);
            System.out.println("hello");
            // 비동기 함수형은 클럭수 증가가 더뎌지고 여러 코어를 최대한 활용해야하는 요즘
//           CompletableFuture<ResponseEntity<String>> f = toCF(rt.getForEntity(URL1, String.class));
              toCF(rt.getForEntity(URL1, String.class, "h" + idx))
                .thenCompose(s -> {
//                    if( 1 == 1) new RuntimeException();
                    System.out.println("------------------1");
                    return toCF(rt.getForEntity(URL2, String.class, s.getBody()));
                })
//                .thenCompose(s2 -> toCF(myService.work(s2.getBody())))
                .thenApplyAsync(s2 ->
                {
                    System.out.println("------------------2");
                    System.out.println(s2);
                    return myService.work(s2.getBody());
                })
                .thenAccept(s3 -> dr.setResult(s3))
                .exceptionally(e -> {
                    dr.setErrorResult(e.getMessage());
                    //TODO null을  TODO로 캐스팅 되는게 신기..;;
//                    return (Void)null;
                    return (Void)null;
                });

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

        <T> CompletableFuture<T> toCF(ListenableFuture<T> lf) {
            CompletableFuture<T> cf = new CompletableFuture<T>();
            lf.addCallback(s -> cf.complete(s), e -> cf.completeExceptionally(e));
            return cf;
        }
    }


    public static class AcceptCompletion extends Completion {
        Consumer<ResponseEntity<String>> con;
        public AcceptCompletion(Consumer<ResponseEntity<String>> con) {
            this.con = con;
        }
        @Override
        void run(ResponseEntity<String> value) {
            con.accept(value);
        }
    }

    public static class ErrorCompletion extends Completion {
        Consumer<Throwable> econ;
        public ErrorCompletion(Consumer<Throwable> econ) {
            this.econ = econ;
        }
        @Override
        void run(ResponseEntity<String> value) {
            if(next != null) {
                next.run(value);
            }
        }

        @Override
        void error(Throwable e) {
            econ.accept(e);
        }
    }

    public static class ApplyCompletion extends Completion {
        Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn;

        public ApplyCompletion(Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn) {
            this.fn = fn;
        }

        @Override
        void run(ResponseEntity<String> value) {
            ListenableFuture<ResponseEntity<String>> lf = fn.apply(value);
            lf.addCallback(s ->  this.complete(s), e ->  error(e));
        }
    }


    public static class Completion {
        Completion next;

        public Completion andError(Consumer<Throwable> econ) {
            Completion c = new ErrorCompletion(econ);
            this.next = c;
            return c;
        }


        public Completion andApply(Function<ResponseEntity<String>, ListenableFuture<ResponseEntity<String>>> fn) {
            Completion c = new ApplyCompletion(fn);
            this.next = c;
            return c;
        }

        static Completion from(ListenableFuture<ResponseEntity<String>> lf) {
            Completion c = new Completion();
            lf.addCallback(s -> {
                c.complete(s);
            } , e -> {
                c.error(e);
            });
            return c;
        }

        public void andAccept(Consumer<ResponseEntity<String>> con) {
            Completion c = new AcceptCompletion(con);
            this.next = c;
        }

        void complete(ResponseEntity<String> s) {
            if (next != null) {
                next.run(s);
            }
        }

        void run(ResponseEntity<String> value) {

        }

        //TODO 코드가 이상하네?
        void error(Throwable e) {
            if (next != null) {
                next.error(e);
            }
        }

    }


    @Service
    public static class MyService {
        public String work(String req) {
            return req + "/asyncwork";
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
        SpringApplication.run(Tobytv011Application.class, args);

    }
}
