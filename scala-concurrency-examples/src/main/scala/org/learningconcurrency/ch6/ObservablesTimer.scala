package org.learningconcurrency.rx

import rx.lang.scala.Observable
import org.learningconcurrency._
import scala.concurrent.duration._

object ObservablesTimer extends App {
  val o = Observable.timer(1.second)
  o.subscribe(_ => log("Timeout"))
  o.subscribe(_ => log("Another timeout!"))
  Thread.sleep(2000)



}
