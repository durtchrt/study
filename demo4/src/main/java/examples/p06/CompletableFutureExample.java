package examples.p06;

import java.util.concurrent.*;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class CompletableFutureExample {

    @SneakyThrows
    public static void main(String[] args) {
        CompletableFuture<String> cf = CompletableFuture
                .completedFuture("Hello")
                .thenApply(x -> {
                    log.info(x);
                    return x + " K";
                })
                .thenApplyAsync(x -> {
//                .thenApply(x -> {
                    log.error(x);
                    return x + "S";
                })
                .thenApply(x -> {
                    log.info(x);
                    return x + "U";
                })
                .thenApply(x -> {
                    log.info(x);
                    return x + "G";
                });

        log.warn(cf.get());
    }

}
