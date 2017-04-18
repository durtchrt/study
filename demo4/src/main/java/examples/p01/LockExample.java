package examples.p01;

import lombok.*;
import lombok.extern.slf4j.*;

@Slf4j
public class LockExample {
    static final int LIMIT = 3;

    @SneakyThrows
    public static void main(String[] args) {
        Object lockObj = new Object();
        for (int i = 0; i < LIMIT; i++) {
            new ThreadLockExample(Integer.MAX_VALUE, lockObj).start();
        }

        for (int i = 0; i < LIMIT; i++) {
            synchronized (lockObj) {
                lockObj.wait();
                log.debug("wait 1");
            }
        }

        log.info("work complete");
    }
}

@Slf4j
class ThreadLockExample extends Thread {
    private long limit;
    private Object lockObj;
    public ThreadLockExample(long limit, Object lockObj) {
        this.limit = limit;
        this.lockObj = lockObj;
    }

    @Override
    public void run() {
        for(long i =0; i< limit; i++){
            if(i % 10_000_000 == 0) {
                log.debug(" ->  {}", i);
            }
        }
        synchronized (lockObj) {
            lockObj.notify();
        }
    }
}
