package org.egov

import akka.actor.Actor.Receive
import akka.actor.{Actor, ActorLogging, ActorRef, ActorSystem, Props}
import org.egov.Counter.Incr

class Main extends App{

  private val system: ActorSystem = ActorSystem("event-processor")
  private val counter: ActorRef = system.actorOf(Props[Counter])
  for( a <- 1 to 10) {
    counter ! Incr
  }

}

object Counter {
  case object Incr
}

class Counter extends Actor with ActorLogging {
  var count: Int = 0

  override def receive: Receive = {
    case Incr =>
      count = count + 1
      System.out.print(count);
  }

}


