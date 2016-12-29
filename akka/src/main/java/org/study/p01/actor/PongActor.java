package org.study.p01.actor;

import akka.actor.*;
import akka.event.*;

public class PongActor extends UntypedActor {
    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private ActorRef ping;

    public PongActor(ActorRef ping) {
        this.ping = ping;
    }


    @Override
    public void onReceive(Object message) throws Throwable {
        if(message instanceof String) {
            String msg = (String) message;
            log.info("Pong received {}", msg);
            ping.tell("pong", getSelf());
//            ActorRef sender = getSender();
//            sender.tell("pong 2", getSelf());
            Thread.sleep(1000);
        }
    }
}
