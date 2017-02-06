package rx;

import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

import rx.functions.*;
import rx.schedulers.*;
import rx.util.async.*;

public class RxMain {

    public static void main(String[] args) throws InterruptedException {
        hello("a","b");
        System.out.println("exit");


        Observable<String> o0 = Async.start(() -> "11", Schedulers.newThread());
        o0.subscribe(System.out::println);
        o0.subscribe(System.out::println);

        Async.asyncAction((x) -> {
//            try {
//                Thread.sleep(500);
//            } catch (InterruptedException e) {
//                e.printStackTrace();
//            }
            System.out.println(">> Async call");
        }, Schedulers.newThread()).call();



        Observable<String> o1 = Observable.from(new String[]{"a", "b", "c"});
        List list = Arrays.asList(5, 6, 7, 8);
        Observable<Integer> o2 = Observable.from(list);
        Observable<String> o3 = Observable.just("one object");

//        customObservableBlocking().subscribe(System.out::println);
//        customObservableNonBlocking().subscribe(System.out::println);
        simpleComposition();

        Observable observable = streamObservalbe();
//        observable.take(2).subscribe(System.out::println);
//        observable.take(4).subscribe(System.out::println);
        Observable observable1 = observable.subscribeOn(Schedulers.newThread());
        observable1.subscribe(System.out::println);
        observable1.subscribe(System.out::println);
//        observable1.take(2).subscribe(System.out::println);

        Thread.sleep(1000);

    }

    public static Observable streamObservalbe() {
        return Observable.create(subscriber -> {
            IntStream stream = IntStream.iterate(0, i -> i + 1);
            stream.peek(i -> {
                System.out.println("---");
               try { Thread.sleep(50); } catch (InterruptedException e) { }
            }).forEach(subscriber::onNext);
        });
    }

    public static Observable customObservableBlocking() {
        return Observable.create( aSubscriber -> {
            Stream.iterate(1, x -> x + 1).limit(5).forEach( x -> {
                System.out.println("aSubscriber.isUnsubscribed(): " + aSubscriber.isUnsubscribed());
                if(!aSubscriber.isUnsubscribed()) {
                    aSubscriber.onNext("values_" + x);
                    try {
                        TimeUnit.SECONDS.sleep(1);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });
            if(!aSubscriber.isUnsubscribed()) {
                System.out.println("onCompleted");
                aSubscriber.onCompleted();
            }
        });
    }

    public static Observable customObservableNonBlocking() {
        return Observable.create( subscriber -> {
            Runnable r = () -> {
                for (int i = 0; i < 10; i++) {
                    if (subscriber.isUnsubscribed()) {
                        return;
                    }
                    subscriber.onNext(String.format("value_%d", i));
                }
                // after sending all values we complete the sequence
                if (!subscriber.isUnsubscribed()) {
                    subscriber.onCompleted();
                }
            };
            r.run();
        });
    }

    static Subscription simpleComposition() {
        return customObservableNonBlocking().skip(2).take(5)
            .map(stringValue -> stringValue + "_xform")
            .subscribe(stringValue -> System.out.println("onNext => " + stringValue));
    }



    public static void hello(String... names) {
        Observable.from(names).subscribe(s -> {
            try {
                Thread.sleep( ((long)( Math.random() * 1000 )));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("Hello " + s + "!");
        });
    }


}
