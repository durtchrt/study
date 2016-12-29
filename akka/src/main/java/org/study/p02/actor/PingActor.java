package org.study.p02.actor;

import akka.actor.*;
import akka.event.*;
import akka.event.slf4j.*;

public class PingActor extends UntypedActor {
    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private ActorRef child;
    private int count = 0;

    public PingActor() {
        child = context().actorOf(Props.create(Ping1Actor.class), "ping1Actor");
    }

    @Override
    public void onReceive(Object message) throws Throwable {
        if(message instanceof String) {
            String msg = (String) message;
            if ("work".equals(msg)) {
                child.tell(msg, getSelf());
            } else if ("done".equals(msg)) {
                if (count == 0) {
                    count++;
                } else {
                    log.info("all works are completed. ");
                    count = 0;
                }

            }
        }

    }
}
