package org.learningconcurrency
package ch2

import java.util.concurrent.TimeUnit

object ThreadsCreation extends App {
  class MyThread extends Thread {
    override def run(): Unit = {
      println("New thread running.")
      TimeUnit.SECONDS.sleep(2)
    }
  }

  val t = new MyThread
  t.start
  t.join
  println("New thread joined.")
}
