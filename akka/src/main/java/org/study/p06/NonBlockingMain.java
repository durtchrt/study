package org.study.p06;


import org.study.p06.actor.*;

import akka.actor.*;

public class NonBlockingMain {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef pingActor = actorSystem.actorOf(Props.create(NonblockingActor.class), "blockingActor");
        pingActor.tell(10, ActorRef.noSender());
        pingActor.tell("hello", ActorRef.noSender());
    }
}
