package examples.p04;

import java.util.concurrent.*;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class FutureMain {
    @SneakyThrows
    public static void main(String[] args) {

        Callable<String> callable = () -> {
            log.warn("run future");
            return "Hello KSUG";
        };
        FutureTask<String> futureTask = new FutureTask<>(callable);
        futureTask.run();
        log.info(futureTask.get());

        ExecutorService es = Executors.<String>newFixedThreadPool(1);
        Future<String> future = es.submit(callable);
        log.info(future.get());
    }
}


