package org.study.p05.actor;

import akka.actor.*;
import akka.event.*;

public class Ping1Actor extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof Integer) {
            Integer msg = (Integer) message;
            log.info("Ping1Actor({}) received {}", hashCode(), msg);
            work(msg);
        }
    }

    private void work(Integer msg) throws InterruptedException {
        log.info("Ping1Actor({}) working on {}", hashCode(), msg);
        Thread.sleep(1000);
        log.info("Ping1Actor({}) completed ", hashCode());
    }
}
