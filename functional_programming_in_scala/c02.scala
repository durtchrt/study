def abs(n: Int): Int = {
  n match {
    case _ if n < 0 => -n
    case _ => n
  }
}

println(s"abs ${abs(-3)}");

def factorial(n: Int): Int = {
  @annotation.tailrec
  def go(n: Int, acc: Int): Int =  {
    if (n <= 0) acc
    else go(n-1, n*acc)
  }

  go(n, 1)  
  
}

println(factorial(10))

//연습문제 2.1
def fib(n: Int): Int = {
  // @annotation.tailrec
  def go(x: Int): Int = {
    if(x == 0 || x == 1) x
    else
      go(x - 1) + go(x - 2)
  }

  go(n)
}

println("::: " + fib(5))

def formatAbs(x: Int): String = {
  val msg = "The absoulte value of %d is %d."
  msg.format(x, abs(x))
}

println(s"formatAbs: ${formatAbs(-10)}")

def formatFactorial(n: Int) = {
  val msg = "The factorial of %d is %d."
  msg.format(n, factorial(n))
}

println(s"formatFactorial: ${formatFactorial(5)}")

def formatResult(name: String, n: Int, f: Int=>Int): String = {
  val msg = "The %s of %d is %d."
  msg.format(name, n, f(n))
}

println(formatResult("factorial", 10, factorial))

// 다형적 함수(polymorphic function)

def findFirst(ss: Array[String], key: String): Int = {
  @annotation.tailrec
  def loop(n: Int): Int = 
    if ( n >= ss.length) -1
    else if (ss(n) == key) n 
    else loop(n + 1)

  loop(0)
}


def findFirst[A](as: Array[A], p: A => Boolean): Int = {
  @annotation.tailrec
  def loop(n: Int): Int = 
    if ( n >= as.length) -1
    else if (p(as(n))) n 
    else loop(n + 1)

  loop(0)
}

val firstIndex = findFirst(Array(1,2,3,4), (x: Int) => x == 3) 
//val firstIndex = findFirst[Int](Array(1,2,3,4), (x) => x == 3) 
println(s"first index is ${firstIndex}")

def isSorted[A](as: Array[A], ordered: (A, A) => Boolean): Boolean = {
  @annotation.tailrec
  def loop(n: Int): Boolean = 
    if ( n+1 >= as.length) false
    else if (ordered(as(n), as(n +1))) true
    else if (!ordered(as(n), as(n +1))) false
    else loop(n+1)

  loop(0)  
}

val sortedResult1 = isSorted[Int](Array(3,2,4), (a, b) => a < b)
println(s"Array(3,2,4) sortedResult is ${sortedResult1}")


val sortedResult2 = isSorted[Int](Array(1,2,4), (a, b) => a < b)
println(s"Array(1,2,4) sortedResult is ${sortedResult2}")

//2.6 형식에서 도출된 구현
def partial1[A, B, C](a: A, f: (A, B) => C): B => C =
  (b: B) => f(a, b)

val partial1Result = partial1(1, (a: Int, b: String) => a + ", " +b)
println(partial1Result("2"))

//연습문제 2.3
def curry[A, B, C](f: (A, B) => C): A => (B => C) =
  (a: A) => (b: B) => f(a, b)

val curryedFuntion = curry[Int, Int, Int]((a, b) => a + b)
val curryResult = curryedFuntion(10)(20)
println(s"curryResult: ${curryResult}")

//연습문제 2.4
def uncurry[A, B, C](f: A => B => C): (A, B) => C = 
  (a, b) => f(a)(b)

val unCurryedFunction = uncurry[Int, Int, Int]( curryedFuntion )
val unCurryedResult = unCurryedFunction(1, 2)
println(s"unCurryedResult: ${unCurryedResult}")

def compose[A, B, C](f: B => C, g: A => B): A => C =
  (a) => f(g(a))
val composedFunction = compose[Int, Int, Int]((b) => b*3, (a) => a+2)
val composedResult = composedFunction(1)
println(s"composedResult: ${composedResult}")


val f = (x: Double) => math.Pi / 2 -x
val cos = f andThen math.sin
println(s"cos(10): ${cos(10)}")



