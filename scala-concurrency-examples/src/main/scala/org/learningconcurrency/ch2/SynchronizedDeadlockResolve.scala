package org.learningconcurrency
package ch2

object SynchronizedDeadlockResolve extends App {
  import SynchronizedProtectedUid.getUniqueId
  class Account(val name: String, var money: Int) {
    val uid = getUniqueId()
    override def toString(): String = {
      s"Account($name, $money)"
    }
  }
  def send(a: Account, b: Account, n: Int) = {
    def adjust(): Unit = {
      a.money -= n
      b.money -= n
    }
    if(a.uid < b.uid)
      a.synchronized { b.synchronized { adjust()}}
    else
      b.synchronized { a.synchronized { adjust()}}

    log(s"$a - $b")
  }

  val jane = new Account("jane", 1000)
  val john = new Account("john", 2000)
  val t1 = thread { for (i <- 0 until 100) send(jane, john, 1)}
  val t2 = thread { for (i <- 0 until 100) send(john, jane, 1)}
  t1.join(); t2.join()
  log(s"a = ${jane.money}, b = ${john.money}")


}
