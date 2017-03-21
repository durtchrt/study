package org.learningconcurrency
package ch2

object SynchronizedGuardedBlocks extends App {
  val lock = new AnyRef
  var message: Option[String] = None
  val greeter = thread {
    println("--->")
    lock.synchronized {
      println(s"- ${message == None}")
      var i: Int = 0
      while (message == None) {
        println("before wait")
        i += 1
        if(i > 10) {
          lock.wait()
        }
      }
      log(message.get)
    }
  }

  Thread.sleep(1000)

  lock.synchronized {
    message = Some("Hello!")
    lock.notify()
  }
  greeter.join()
}
