package akka;

import akka.actor.*;

public class BlockingMain {

    public static void main(String[] args) {
        ActorSystem actorSystem = ActorSystem.create("TestSystem");
        ActorRef nonblockingActor = actorSystem.actorOf(Props.create(BlockingActor.class), "nonblockingActor");
        nonblockingActor.tell(10, ActorRef.noSender());
        nonblockingActor.tell("hello", ActorRef.noSender());
    }

}
