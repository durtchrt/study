package org.study.p04.actor;

import akka.actor.*;
import akka.event.*;
import akka.japi.Procedure;

public class PingActor extends UntypedActorWithStash {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private ActorRef child;

    public PingActor() {
        this.child = context().actorOf(Props.create(Ping1Actor.class), "ping1Actor");
        getContext().become(initial);
    }

    @Override
    public void onReceive(Object message) throws Throwable {
    }

    private Procedure<Object> initial = new Procedure<Object>() {

        @Override
        public void apply(Object message) throws Exception {
            if("work".equals(message)) {
                child.tell("work", getSelf());
                getContext().become(zeroDone);
            } else {
                stash();
            }

        }
    };

    private Procedure<Object> zeroDone = new Procedure<Object>() {

        @Override
        public void apply(Object message) throws Exception {
            if ("done".equals(message)) {
                log.info("Recieved the first done");
                getContext().become(oneDone);
            } else {
                stash();
            }
        }
    };

    private Procedure<Object> oneDone = new Procedure<Object>() {
        @Override
        public void apply(Object message) throws Exception {
            if ("done".equals(message)) {
                log.info("Recieved the second done");
                unstashAll();
                getContext().become(allDone);
            } else {
                stash();
            }
        }
    };

    private Procedure<Object> allDone = new Procedure<Object>() {
        @Override
        public void apply(Object message) throws Exception {
            if ("reset".equals(message)) {
                log.info("Received a reset");
                getContext().become(initial);
            } else {
                stash();
            }
        }
    };

}
