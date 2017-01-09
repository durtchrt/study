package study.p01

import akka.actor.{ActorSystem, Props}
import study.p01.actor.PingActor

object Main extends App {
  val system = ActorSystem("actorSystem")
  var ping = system.actorOf(Props[PingActor], "pingActor")
  ping ! "start"
}
