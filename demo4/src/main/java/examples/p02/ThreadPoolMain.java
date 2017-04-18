package examples.p02;

import java.util.concurrent.*;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class ThreadPoolMain {
    @SneakyThrows
    public static void main(String[] args) {
        ExecutorService es = Executors.newFixedThreadPool(10);
        Future<String> f = es.submit(() -> {
            log.info("running in thread pool.");
            return "Hello KSUG!!!";
        });
        log.info(f.get());
    }
}
