package study.p01.actor

import akka.actor.{Actor, Props}
import akka.event.Logging

case object PingActor

class PingActor extends Actor {
  val log = Logging(context.system, this)

  val pong = context.actorOf(Props[PongActor], "pongActor")
  def receive = {
    case "start"  => {
      log info "Ping received start"
      pong ! "ping"
    }
    case "pong"   => {
      log info "Ping received pong"
      sender ! "ping"
    }
  }
}
