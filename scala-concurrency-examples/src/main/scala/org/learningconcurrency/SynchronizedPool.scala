package org.learningconcurrency

import scala.collection.mutable

object SynchronizedPool extends App {
  private val tasks = mutable.Queue[() => Unit]()
  object Worker extends Thread {
//    setDaemon(true)
    var terminated = false
//    def poll() = tasks.synchronized {
//      while (tasks.isEmpty) {
//        println("before wait")
//        tasks.wait()
//      }
//      tasks.dequeue()
//    }

    def poll(): Option[ () => Unit] = tasks.synchronized {
      while (tasks.isEmpty && !terminated) {
        println("before wait")
        tasks.wait()
      }

      if (!terminated) Some(tasks.dequeue()) else None
    }
//    override def run() = while(true) {
//      val task = poll()
//      task()
//    }
    override def run() = poll() match {
      case Some(task) => task(); run()
      case None =>
    }

    def shutdown() = tasks.synchronized {
      terminated = true
      println("shutdown")
      tasks.notify()
    }
  }

  Worker.start()
  def asynchronous(body: =>Unit) = tasks.synchronized {
    tasks.enqueue( () => body)
    tasks.notify()
  }
  asynchronous { log("Hello ")}
  asynchronous { log("World!")}
  Thread.sleep(500)

  Worker.shutdown()
}
