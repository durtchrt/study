package example.actor;

import akka.actor.*;
import akka.event.*;

public class PingActor extends UntypedActor{
    private final LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private ActorRef pongActor;

    public PingActor() {
        this.pongActor = getContext().actorOf(Props.create(PongActor.class), "pongActor");
    }

    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            log.info("PingActor received message : {}", msg);
            if("start".equals(msg)) {
                pongActor.tell("ping", getSelf());
            } else if ("pong".equals(msg)) {
                sender().tell("ping", getSelf());
            }
        } else {
            unhandled(message);
        }

    }
}
