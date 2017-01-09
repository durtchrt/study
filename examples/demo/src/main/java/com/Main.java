package com;

import com.actor.*;

import akka.actor.*;

public class Main {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("actorSystem");
        ActorRef pingActor = actorSystem.actorOf(Props.create(PingActor.class), "pingActor");
        pingActor.tell("start", ActorRef.noSender());
    }
}
