package org.study.p04;


import org.study.p04.actor.*;

import akka.actor.*;

public class Main {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef pingActor = actorSystem.actorOf(Props.create(PingActor.class), "pingActor");
        pingActor.tell("work", ActorRef.noSender());
        pingActor.tell("reset", ActorRef.noSender());
    }
}
