package org.learningconcurrency

object HelloWorld extends App {
  println("Hello World!")
  val t: Thread = Thread.currentThread()
  println(s"$t")
  val name = t.getName
  println(s"I am the thread $name")

}
