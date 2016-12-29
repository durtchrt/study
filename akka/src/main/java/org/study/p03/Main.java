package org.study.p03;


import org.study.p03.actor.*;

import akka.actor.*;

public class Main {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef pingActor = actorSystem.actorOf(Props.create(PingActor.class), "pingActor");
        pingActor.tell("good", ActorRef.noSender());
        pingActor.tell("bad", ActorRef.noSender());
    }
}
