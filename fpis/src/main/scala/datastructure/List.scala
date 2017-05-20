package datastructure


sealed trait List[+A] // `List` data type, parameterized on a type, `A`
case object Nil extends List[Nothing] // A `List` data constructor representing the empty list
/* Another data constructor, representing nonempty lists. Note that `tail` is another `List[A]`,
which may be `Nil` or another `Cons`.
 */
case class Cons[+A](head: A, tail: List[A]) extends List[A]

object List extends App { // `List` companion object. Contains functions for creating and working with lists.
  def sum(ints: List[Int]): Int = ints match { // A function that uses pattern matching to add up a list of integers
    case Nil => 0 // The sum of the empty list is 0.
    case Cons(x,xs) => x + sum(xs) // The sum of a list starting with `x` is `x` plus the sum of the rest of the list.
  }

  def product(ds: List[Double]): Double = ds match {
    case Nil => 1.0
    case Cons(0.0, _) => 0.0
    case Cons(x,xs) => x * product(xs)
  }

  def apply[A](as: A*): List[A] = // Variadic function syntax
    if (as.isEmpty) Nil
    else Cons(as.head, apply(as.tail: _*))

  val x = List(1,2,3,4,5) match {
    case Cons(x, Cons(2, Cons(4, _))) => x
    case Nil => 42
    case Cons(x, Cons(y, Cons(3, Cons(4, _)))) => x + y
    case Cons(h, t) => h + sum(t)
    case _ => 101
  }

  def append[A](a1: List[A], a2: List[A]): List[A] =
    a1 match {
      case Nil => a2
      case Cons(h,t) => Cons(h, append(t, a2))
    }

  def foldRight[A,B](as: List[A], z: B)(f: (A, B) => B): B = // Utility functions
    as match {
      case Nil => z
      case Cons(x, xs) => f(x, foldRight(xs, z)(f))
    }

  def sum2(ns: List[Int]) =
    foldRight(ns, 0)((x,y) => x + y)

  def product2(ns: List[Double]) =
    foldRight(ns, 1.0)(_ * _) // `_ * _` is more concise notation for `(x,y) => x * y`; see sidebar

  // 3.2
  def tail[A](l: List[A]): List[A] = {
    l match {
      case Nil => Nil
      case Cons(_, tail) => tail
    }
  }

  val x32 = tail(List(1,2,3))
  println(s""" 3.2 ${x32 == List(2,3)}""")

  // 3.3
  def setHead[A](l: List[A], h: A): List[A] = Cons(h, tail(l))

  val x33 = setHead(List(0,2,3), 1)
  println(s""" 3.4 ${x33 == List(1, 2,3)}""")

  def drop[A](l: List[A], n: Int): List[A] = {
    n match {
      case 0 => l
      case _ => drop(tail(l), n -1)
    }
  }

  val x34 = drop(List(1,2,3), 2)
  println(s""" 3.4 ${x34 == List(3)}""")

  // 3.4
  def head[A](l:List[A]): Option[A] = {
    l match {
      case Nil => None
      case Cons(x, _) => Some(x)
    }
  }

//  println(s"""head ${head(Nil)}""")

  // 3.5
  def dropWhile[A](l: List[A], f: A => Boolean): List[A] = {
    head(l) match {
      case Some(x) =>
        f(x) match {
          case true => l
          case false => dropWhile(tail(l), f)
        }
      case None => Nil
    }
  }

  val x35 = dropWhile(List(1,2,3), (x: Int) =>  x > 2 )
  println(s""" 3.5 ${x35 == List(3)}""")

  def init[A](l: List[A]): List[A] = {
    l match {
      case Cons(h, Cons(t, Nil)) => Cons(h, Nil)
      case Cons(h, t) => Cons(h, init(t))
    }
  }

  val x36 = init(List(1,2,3))
  println(s""" 3.6 ${x36 == List(1,2)}""")

  def length[A](l: List[A]): Int = {
    l match {
      case Nil => 0
      case Cons(_, t) => 1 + length(t)
    }
  }

  val x37 = length(List(1,2,3))
  println(s""" 3.7 ${x37 == 3}""")

  def foldLeft[A,B](l: List[A], z: B)(f: (B, A) => B): B = {
    l match {
      case Nil => z
      case Cons(h, t) =>
    }
  }

  def map[A,B](l: List[A])(f: A => B): List[B] = ???
}
