package org.study.p02;


import org.study.p02.actor.*;

import akka.actor.*;

public class Main {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef pingActor = actorSystem.actorOf(Props.create(PingActor.class), "pingActor");
        pingActor.tell("work", ActorRef.noSender());
    }
}
