package org.study.p02.actor;

import akka.actor.*;
import akka.event.*;

public class Ping3Actor extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            if ("work".equals(msg)) {
                log.info("Ping3Actor received {}", msg);
                work();
                getSender().tell("done", getSelf());
            }
        }
    }

    private void work() throws InterruptedException {
        log.info("Ping3 working...");
        Thread.sleep(1000);
        log.info("Ping3 complete");
    }

}
