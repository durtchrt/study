package examples.p05;



import org.springframework.core.task.*;
import org.springframework.scheduling.concurrent.*;
import org.springframework.util.concurrent.*;

import java.util.*;
import java.util.concurrent.*;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class ListenableFutureExample {
    @SneakyThrows
    public static void main(String[] args) {
        Callable<String> c0 = () -> {
            log.info("c0");
            return "HELLO ";
        };
        SimpleAsyncTaskExecutor pool = new  SimpleAsyncTaskExecutor();
        ListenableFuture<String> f1= pool.submitListenable(c0);

        ListenableFutureResult<String> result = new ListenableFutureResult<>();

        f1.addCallback(s1 -> {
            log.info("s1");
            Callable<String> c1 = () -> {
                log.info("c1");
                return  s1 + " K";
            };
            ListenableFuture<String> f2= pool.submitListenable(c1);
            f2.addCallback(s2 -> {
                log.info("s2");
                Callable<String> c2 = () -> {
                    log.info("c2");
                    return  s2 + "S";
                };
                ListenableFuture<String> f3 = pool.submitListenable(c2);
                f3.addCallback(s3 -> {
                    log.info("s3");
                    Callable<String> c3 = () -> {
                        log.info("c3");
                        return  s3 + "U";
                    };
                    ListenableFuture<String> f4 = pool.submitListenable(c3);
                    f4.addCallback(s4 -> {
                        log.info("s4");
                        result.complete(s4 + "G");
                    }, e4 -> {});
                }, e2 -> {});
            }, e2 -> {});
        }, e1 -> {});

        String msg = result.get();
        log.info(msg);
    }
}

@Slf4j
class ListenableFutureResult<T> {
    private T result;
    private Object notifier = new Object();
    public void complete(T result) {
        synchronized (notifier) {
            log.error("notify");
            notifier.notify();
        }
        this.result = result;
    }
    @SneakyThrows
    public T get() {
        if(result == null) {
            synchronized (notifier) {
                log.error("wait");
                notifier.wait();
            }
        }
        return result;
    }
}
