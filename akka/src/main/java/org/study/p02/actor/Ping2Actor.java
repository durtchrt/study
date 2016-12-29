package org.study.p02.actor;

import javax.lang.model.type.*;

import akka.actor.*;
import akka.event.*;

public class Ping2Actor extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            if ("work".equals(msg)) {
                log.info("Ping2Actor received {}", msg);
                work();
                getSender().tell("done", getSelf());
            }
        }
    }

    private void work() throws InterruptedException {
        log.info("Ping2 working...");
        Thread.sleep(1000);
    }
}
