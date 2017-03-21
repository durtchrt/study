package org.learningconcurrency.rx
package org.learningconcurrency

package rx

import rx.lang.scala.{Observable, Observer}
import org.learningconcurrency._

object ObservablesExcecptions extends App {
  val exec = new RuntimeException
  val o = Observable.items(1, 2) ++ Observable.error(exec) ++ Observable.items(3, 4)

  o.subscribe(
    x => log(s"number $x"),
    t => log(s"an error occurred: $t")
  )
}
