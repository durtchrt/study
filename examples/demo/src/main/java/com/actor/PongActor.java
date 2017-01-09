package com.actor;

import akka.actor.*;
import akka.event.*;

public class PongActor extends UntypedActor {

    private final LoggingAdapter log = Logging.getLogger(getContext().system(), this);
//    ActorRef pongActor ;

//    public PingActor(){
//        pongActor = getContext().actorOf(Props.create(PongActor.class), "pongActor");
//    }

    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            if("ping".equals(msg)) {
                log.info(">>>>>>");
                log.info(msg);
//                pongActor.tell("ping", getSelf());
                sender().tell("pong", getSelf());
                Thread.sleep(1000);
            }
        }
    }
}
