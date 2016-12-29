package org.study.p06;


import org.study.p06.actor.*;

import akka.actor.*;

public class AgentMain {

    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef agentActor = actorSystem.actorOf(Props.create(AgentActor.class), "agentActor");
        agentActor.tell("start", ActorRef.noSender());
    }

}
