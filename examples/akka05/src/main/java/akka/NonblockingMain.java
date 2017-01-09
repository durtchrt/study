package akka;

import akka.actor.*;

public class NonblockingMain {
    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef nonblockingActor = actorSystem.actorOf(Props.create(NonblockingActor.class), "nonblockingActor");
        nonblockingActor.tell(10, ActorRef.noSender());
        nonblockingActor.tell("hello", ActorRef.noSender());
    }
}
