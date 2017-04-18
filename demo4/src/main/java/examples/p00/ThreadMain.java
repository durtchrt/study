package examples.p00;

public class ThreadMain {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            ThreadExample example = new ThreadExample();
            example.depthOne();
        });
        thread.start();
        new ThreadMain().printMain();
    }

    public void printMain() {
        System.out.println(Thread.currentThread() + " thread running");
    }
}

class ThreadExample {
    public void depthOne() {
        depthTwo();
    }

    private void depthTwo() {
        System.out.println(Thread.currentThread() + " thread running");
    }
}

