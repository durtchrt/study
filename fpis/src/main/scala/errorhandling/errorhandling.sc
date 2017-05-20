def failingFn(i: Int): Int = {
  val y: Int = throw new Exception("fail")
  try{
    val x = 42 + 5
    x + y
  }
  catch { case e: Exception => 42}
}

//failingFn(12)

def failingFn2(i: Int): Int = {
  try{
    val x = 42 + 5
    x + ((throw new Exception("fail")): Int)
  }
  catch { case e: Exception => 42}
}

failingFn2(12)

def mean(xs: Seq[Double]): Double =
  if (xs.isEmpty)
    throw new ArithmeticException("mean of empty list!")
  else xs.sum / xs.length

mean(Seq(10, 20, 30))