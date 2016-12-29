package org.study.p05.actor;

import akka.actor.*;
import akka.event.*;
import akka.japi.Procedure;
import akka.routing.*;

public class PingActor extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private ActorRef childRouter;

    public PingActor() {
        this.childRouter = context().actorOf(
                new RoundRobinPool(5).props(Props.create(Ping1Actor.class)), "ping1Actor");

//        this.childRouter = context().actorOf(Props.create(Ping1Actor.class), "ping1Actor");
    }

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            for (int i = 0; i <10 ; i++) {
                childRouter.tell(i, getSelf());
            }
            log.info("PingActor sent 10 messages to the router");
        } else {
            unhandled(message);
        }
    }
}
