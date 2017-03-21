import rx.lang.scala.Observable

val t: Thread = Thread.currentThread()
val name = t.getName
println(s"I am the thread $name")

def f(v: Int)(a: Int => Int): Int = {
  a(v)
}
private val c = f(2)(_)
println(c(x => x + 1))

