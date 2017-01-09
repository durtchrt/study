package example.actor;

import akka.actor.*;
import akka.event.*;

public class PongActor extends UntypedActor{
    private final LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    public void onReceive(Object message) throws Throwable {
        if (message instanceof String) {
            String msg = (String) message;
            if("ping".equals(msg)) {
                log.info("PongActor received message : {}", msg);
                sender().tell("pong", getSelf());
                Thread.sleep(1000);
            }
        } else {
            unhandled(message);
        }

    }
}
