package study.p02

import akka.actor.{ActorSystem, Props}
import com.typesafe.config.ConfigFactory

object MembersService extends App {
  val config = ConfigFactory.load.getConfig("MembersService")
  val system = ActorSystem("MembersService", config)
  val worker = system.actorOf(Props[Worker], "remote-worker")
  println("============================================================================")
  println(s"Worker actor path is ${worker.path}")
  println("============================================================================")
}


object MemberServiceLookup extends App {
  val config = ConfigFactory.load.getConfig("MemberServiceLookup")
  val system = ActorSystem("MemberServiceLookup", config)
  val worker = system.actorSelection("akka.tcp://MembersService@127.0.0.1:2552/user/remote-worker")
  println("============================================================================")
  worker ! Worker.Work("Hi Remote Actor")
  println("============================================================================")
}

object MembersServiceRemoteCreation extends App {
  val config = ConfigFactory.load.getConfig("MembersServiceRemoteCreation")
  val system = ActorSystem("MembersServiceRemoteCreation", config)
  val workerActor = system.actorOf(Props[Worker], "workerActorRemote")
  println("============================================================================")
  println(s"The remote path of worker Actor is ${workerActor.path}")
  println("============================================================================")
  workerActor ! Worker.Work("Hi Remote Worker")

}
