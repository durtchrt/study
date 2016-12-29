package org.study.p04.actor;

import akka.actor.*;
import akka.event.*;

public class Ping3Actor extends UntypedActor {
    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    @Override
    public void onReceive(Object message) throws Exception {
        if (message instanceof String) {
            String msg = (String) message;
            log.info("Ping3 received {}", msg);
            work();
            getSender().tell("done", getSelf());
        }
    }

    private void work() throws Exception {
        Thread.sleep(1000);
        log.info("Ping3 working...");
    }
}
