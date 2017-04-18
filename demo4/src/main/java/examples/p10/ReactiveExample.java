package examples.p10;

import org.reactivestreams.*;

import java.time.*;
import java.time.Duration;
import java.util.*;

import javafx.util.*;
import lombok.extern.slf4j.*;
import reactor.core.*;
import reactor.core.publisher.*;

@Slf4j
public class ReactiveExample {
    public static void main(String[] args) throws InterruptedException {
//        Mono
//        Flux<Integer> f = Flux.range(1, 5);
//        f.subscribe()

//        HashMap m = new HashMap();
//        m.put("h", "w");
//        Optional<Boolean> aBoolean = Optional.ofNullable(null).map(x -> true);
//        System.out.println(aBoolean);
//
//        double a = 0.1;
//
//        Flux<String> flux = Flux.generate(
//            () -> 0,
//            (state, sink) -> {
//              sink.next("3 x " + state + " = " + 3*state);
//              if (state == 10) sink.complete();
//              return state + 1;
//            });

        Mono<String> mono1 = Mono.just("Hello");
        Mono<String> mono2 = Mono.just("KSUG");
        Mono<String> mono = mono1.map(x -> x + " ")
                .and(mono2, (x, y) -> x + y)
                .map(x -> x + "!!!");
        mono.subscribe(x -> log.warn(x));

        Iterable<String> strings = Arrays.asList("Hello", "KSUG", "!!!");
        Flux<String> flux = Flux.fromIterable(strings);
        flux.log().subscribe(x -> log.info(x));
        Mono<String> reduce = flux.reduce((x, y) -> x + y);
        reduce.subscribe(x -> log.error(x));
        
//        flux.subscribe(x -> log.info(x));

// 여기서 왜 onNext가 안되지 -_-;;
//        flux.subscribe(new Subscriber<String>() {
//                @Override
//                public void onSubscribe(Subscription subscription) {
//                    System.out.println("onSubscribe " + subscription);
//
//                }
//
//                @Override
//                public void onNext(String s) {
//                    System.out.println("onNext " + s);
//                }
//
//                @Override
//                public void onError(Throwable throwable) {
//                    System.out.println("onError " + throwable);
//                }
//
//                @Override
//                public void onComplete() {
//                    System.out.println("onComplete");
//                }
//            });


//
//        Flux<String> source = Flux.fromArray(new String[]{"a", "b", "c"});
//        source.map(x -> x.toUpperCase()).subscribe(new Subscriber<String>() {
//
//            @Override
//            public void onSubscribe(Subscription s) {
//                s.request(Long.MAX_VALUE);
//            }
//            @Override
//            public void onNext(String t) {
//                System.out.println(t);
//            }
//            @Override
//            public void onError(Throwable t) {
//            }
//            @Override
//            public void onComplete() {
//            }
//        });
//        ((Subscriber)s).
        ;

//        flux.interval(Duration.ofSeconds(1)).window(2)
//            /*.map(x -> x + ">>>>")*/.subscribe(x -> log.info("" + x));
//        System.out.println("---");
//        Thread.sleep(5000);

//        Flux<Integer> flux = Flux.range(0, 10);
//        Mono<Integer> next = flux.next();
//        next.subscribe(System.out::println);
//        Flux<String> alphabet = Flux.just(-1, 30, 13, 9, 20)
//            .handle((i, sink) -> {
//                String letter = "A";
//                if (letter != null)
//                    sink.next(letter);
//            });
//
//        alphabet.subscribe(System.out::println);
//        Flux<Integer> flux = Flux.generate(
//                () -> 0,
//                (state, sink) -> {
//                    if(state == 5) sink.complete();
//                    return state + 1;
//                });
//        Mono<Integer> next = flux.next();
//
//
//        flux.subscribe(x -> {
//            System.out.println(x);
//        });



    }
}
