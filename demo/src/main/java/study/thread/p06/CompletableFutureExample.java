package study.thread.p06;

import java.util.concurrent.*;

public class CompletableFutureExample {
    public static void main(String[] args) throws ExecutionException, InterruptedException {

        CompletableFuture<String> f1 = CompletableFuture
                .completedFuture("H")
                .thenApply(x -> x + "E")
                .thenApply(x -> x + "L")
                .thenApply(x -> x + "L")
                .thenApply(x -> x + "O")
                .handle((ok, err) -> {
                    if (ok != null) {
                        return ok + " ";
                    }
                    err.printStackTrace();
                    return "";
                });

        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "KSUG");
        
        String result = f1
                .thenCombine(f2, (a, b) -> a + b)
                .get();
        System.out.println(result);

    }
}
