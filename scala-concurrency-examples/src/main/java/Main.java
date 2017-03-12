import java.util.concurrent.atomic.*;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        int count = 0;
        TestStackThread testStackThread = new TestStackThread(count);
        testStackThread.start();
        testStackThread.join();
        System.out.println(count);

        AtomicInteger atomicInteger = new AtomicInteger(0);
        TestHeapThread testHeapThread = new TestHeapThread(atomicInteger);
        testHeapThread.start();
        testHeapThread.join();
        System.out.println(atomicInteger);
    }
}

class TestStackThread extends Thread {
    private int count;

    public TestStackThread(int count) {
        this.count = count;
    }

    @Override
    public void run() {
        count++;
        count++;
        count++;
        count++;
        count++;
    }
}

class TestHeapThread extends Thread {
    private AtomicInteger atomicInteger;

    public TestHeapThread(AtomicInteger atomicInteger) {
        this.atomicInteger = atomicInteger;
    }

    @Override
    public void run() {
        atomicInteger.incrementAndGet();
        atomicInteger.incrementAndGet();
        atomicInteger.incrementAndGet();
        atomicInteger.incrementAndGet();
        atomicInteger.incrementAndGet();
    }
}
