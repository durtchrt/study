package study.p01.actor

import akka.actor.Actor
import akka.event.Logging

case object PongActor

class PongActor extends Actor {
  val log = Logging(context.system, this)

  def receive = {
    case "ping" => {
      sender ! "pong"
      log info "Ping received pong"
      Thread sleep 1000
    }
  }
}
