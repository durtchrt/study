package org.study.p03.actor;

import akka.actor.*;
import akka.event.*;
import scala.*;

public class Ping3Actor extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    public Ping3Actor() {
        log.info("Ping3Actor constructor..");
    }

    @Override
    public void preRestart(Throwable reason, Option<Object> message) throws Exception {
        log.info("Ping3Actor preRestart");
    }

    @Override
    public void postRestart(Throwable reason) throws Exception {
        log.info("Ping3Actor postRestart");
    }

    @Override
    public void postStop() throws Exception {
        log.info("Ping3Actor postStop");
    }

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            if ("good".equals(msg)) {
                goodWork();
            } else if("bad".equals(msg)) {
                badWork();
            }
        } else {
            unhandled(message);
        }
    }

    private void badWork() throws Exception {
        throw new NullPointerException();
    }

    private void goodWork() {
        log.info("Ping3Actor is good.");
    }


}
