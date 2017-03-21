package org.learningconcurrency.rx

import rx.lang.scala.{Observable, Observer}
import org.learningconcurrency._

object ObservablesLifetime extends App {
  val classics = List("Good, bad ugly", "Titanic", "Die hard")
  val movies = Observable.from(classics)
  movies.subscribe(new Observer[String] {
    override def onNext(m: String) = log(s"Movies Watchlist - $m")
    override def onError(e: Throwable) = log(s"Ooops - $e!")
    override def onCompleted() = log(s"No more movies.")
  })
}
