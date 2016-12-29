package org.study.p08.service;

import akka.actor.*;
import akka.event.*;

public class PingService extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private int count = 0;

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            getSender().tell("PING" + count++, getSelf());
        } else {
            unhandled(message);
        }
    }
}
