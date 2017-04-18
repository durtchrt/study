package examples.p06;

import java.util.concurrent.*;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class CompletableFutureExample {

    @SneakyThrows
    public static void main(String[] args) {
        CompletableFuture<String> cf1 = CompletableFuture
                                            .supplyAsync(() -> "!!!");

        CompletableFuture<String> cf2 = CompletableFuture
                .completedFuture("Hello")
                .thenApply(x -> {
                    log.info(x);
                    return x + " K";
                })
                .thenApplyAsync(x -> {
                    log.debug(x);
                    return x + "S";
                })
                .thenApply(x -> {
                    log.info(x);
                    return x + "U";
                })
                .thenApplyAsync(x -> {
                    log.info(x);
                    return x + "G";
                })
                .thenCombineAsync(cf1, (x, y) -> x  + y);

        log.warn(cf2.get());
    }
}
