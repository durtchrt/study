package org.study.p08.node2;

import org.study.p08.service.*;

import akka.actor.*;

public class Main {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("ClusterSystem");
        ActorRef pingService = actorSystem.actorOf(Props.create(PingService.class), "pingService");
    }
}
