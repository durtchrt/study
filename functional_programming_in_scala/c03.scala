//3 functional data structure

//package fpinscala.datastructures

sealed trait List[+A]
case object Nil extends List[Nothing]
case class Cons[+A](head: A, tail: List[A]) extends List[A]

object List {
  def sum(ints: List[Int]): Int = ints match {
    case Nil => 0
    case Cons(x, xs) => x + sum(xs)
  }

  def product(ds: List[Double]): Double = ds match {
    case Nil => 1.0
    case Cons(0.0, _) => 0.0
    case Cons(x, xs) => x * product(xs)
  }

//  @annotation.tailrec
  def apply[A](as: A*): List[A] = 
    if(as.isEmpty) Nil
    else Cons(as.head, apply(as.tail: _*))
}

val leftList = List(1, 2, 3)
val rightList = List(4, 5, 6)
// val joinedList = join(leftList, rightList)
println(leftList)


val ex1: List[Double] = Nil
val ex2: List[Int] = Cons(1, Nil)
val ex3: List[String] = Cons("a", Cons("b", Nil))
val ex3_1: List[Int] = List(1,2,3,4)

println(
s"""
  ex1: ${ex1}
  ex2: ${ex2}
  ex3: ${ex3}
  ex3_1: ${ex3_1}
"""
)

//3.2 pattern matching
def sum(ints: List[Int]): Int = ints match {
  case Nil => 0
  case Cons(x, xs) => x + sum(xs)
}

def product(ds: List[Double]): Double = ds match {
  case Nil => 1.0
  case Cons(0.0, _) => 0.0
  case Cons(x, xs) => x * product(xs)
}

val ex4: List[Int] = Cons(1, Cons(2, Nil))
println(s"sum(ex4): ${sum(ex4)}")

val ex5: List[Double] = Cons(1.0, Cons(2.0, Nil))
println(s"product(ex5): ${product(ex5)}")

val matchedList1 = List(1,2,3) match { case _ => 42 }
println(s"matchedList1: ${matchedList1}")

val matchedList2 = List(1,2,3) match { case Cons(h, _) => h }
println(s"matchedList2: ${matchedList2}")

val matchedList3 = List(1,2,3) match { case Cons(_, t) => t }
println(s"matchedList3: ${matchedList3}")

//scala.MatchError: Cons(1,Cons(2,Cons(3,Nil))) (of class Main$$anon$1$Cons)
/*
val matchedList4 = List(1,2,3) match { case Nil => 42 }
println(s"matchedList4: ${matchedList4}")
*/

//연습문제 3.1
val x = List(1,2,3,4,5) match {
  case Cons(x, Cons(2, Cons(4, _))) => x 
  //case Cons(x, Cons(2, Cons(3, Cons(4, _)))) => x 
  case Nil => 42
  case Cons(x, Cons(y, Cons(3, Cons(4, _)))) => x + y
  case Cons(h, t) => h + sum(t)
  case _ => 101
}

println(s"x: ${x}")

//연습문제 3.2
def tail[A](list: List[A]): List[A] = {
  list match {
    case Nil | Cons(_, Nil) => Nil
    case Cons(_, c) => c
  }
}

val tailResult1 = tail[Int](List())
println(s"tailResult1: ${tailResult1}")
val tailResult2 = tail[Int](List(1))
println(s"tailResult2: ${tailResult2}")
val tailResult3 = tail[Int](List(1,2,3,4))
println(s"tailResult3: ${tailResult3}")

def setHead[A](list: List[A], a: A): List[A] = {
  list match {
    case Nil => Nil
    case Cons(_, Nil) => Cons(a, Nil)
    case Cons(_, c) => Cons(a, c)
  }
}

val setHeadResult1 = setHead[Int](List(), 0)
println(s"setHeadResult1: ${setHeadResult1}")
val setHeadResult2 = setHead[Int](List(1), 0)
println(s"setHeadResult2: ${setHeadResult2}")
val setHeadResult3 = setHead[Int](List(1,2,3,4), 0)
println(s"setHeadResult3: ${setHeadResult3}")


//3.5 TREE
sealed trait Tree[+A]
case class Leaf[A](value: A) extends Tree[A]
case class Branch[A](left: Tree[A], right: Tree[A]) extends Tree[A]

val leafA = Leaf("a")
val leafB = Leaf("b")
val branchA = Branch(leafA, leafB)

val leafC = Leaf("c")
val leafD = Leaf("d")
val branchB = Branch(leafC, leafD)

val root = Branch(branchA, branchB)

println(root)

def size(t: Tree[String]) =  {
  def travelTree(t: Tree[String]): List[Tuple2[Int, Int]] = 
    t match {
      case Branch(x, y) => Cons((1, 0), travelTree(x)) // travelTree(y)를 넣을데가.... List merge가 필요함. T-T
      case Leaf(x) => Cons((0, 1), Nil)
    }
  
   travelTree(t)
}

val treeSize = size(root)
println(treeSize)






























