package study.p02

import akka.actor.Actor
import akka.actor.Actor.Receive

class Worker extends Actor{
  import Worker._

  def receive: Receive = {
    case msg: Work =>

      println("============================================================================")
      println(s"I received Work Message and My ActorRef: ${self}")
      println("============================================================================")
  }
}

object Worker {
  case class Work(message: String)
}
