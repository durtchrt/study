package example;

import akka.actor.*;
import example.actor.*;

public class Main {

    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("actorSystem");
        ActorRef pingActor = actorSystem.actorOf(Props.create(PingActor.class), "pingActor");
        // tell method : fire and forget
        pingActor.tell("start", ActorRef.noSender());
    }
}
