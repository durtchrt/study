import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.stream.*;

public class AddThreadMain {
    public static void main(String[] args) throws InterruptedException {

        long startTime = System.nanoTime();
        AtomicInteger atomicInteger = new AtomicInteger(0);
        IntStream.range(0, 100_000_000).forEach(x -> atomicInteger.incrementAndGet());
        long endTime = System.nanoTime() - startTime;
        System.out.println(String.format("%d, %d", endTime, atomicInteger.get()));

        startTime = System.nanoTime();
        atomicInteger.set(0);
        IntStream.range(0, 100_000_000).parallel().forEach(x -> atomicInteger.incrementAndGet());
        endTime = System.nanoTime() - startTime;
        System.out.println(String.format("%d, %d", endTime, atomicInteger.get()));


    }
}


