import org.apache.commons.lang3.*;
import org.apache.commons.lang3.time.*;

import java.util.concurrent.*;

public class ThreadTest2 {
    public static void main(String[] args) throws BrokenBarrierException, InterruptedException {
        ExecutorService es = Executors.newFixedThreadPool(1000);
        CyclicBarrier barrier = new CyclicBarrier(1);
        for(int i =0 ; i < 1; i++) {
            es.submit(() -> {
                int v = 0;
                barrier.await();
                System.out.println(String.format("%s", Thread.currentThread().getName()));
                long startTime = System.nanoTime();
                while(true) {
                    if(v == Integer.MAX_VALUE) {
                        v = 0;
                    }
                    if(v != 0 && (v % 1_000_000_000) == 0) {
                        long endTime = System.nanoTime() - startTime;
                        endTime = endTime / 1000000;
                        System.out.println(String.format("%s -- %d", Thread.currentThread().getName(), endTime));
                        startTime = System.nanoTime();
                    }
//                    System.out.println(v);
                    v++;
                }
            });
        }
//        barrier.await();
        System.out.println("---");
        System.out.println((10001 % 10000));


    }

}
