package org.learningconcurrency
package ch2

object SynchronizedDeadlock extends App {
  import SynchronizedNesting.Account
  def send(a: Account, b: Account, n: Int) = a.synchronized {
    log(s"$a - $b")
    b.synchronized {
      a.money -= n
      b.money -= n
    }
  }

  val jane = new Account("jane", 1000)
  val john = new Account("john", 2000)
  val t1 = thread { for (i <- 0 until 100) send(jane, john, 1)}
  val t2 = thread { for (i <- 0 until 100) send(john, jane, 1)}
  t1.join(); t2.join()
  log(s"a = ${jane.money}, b = ${john.money}")


}
