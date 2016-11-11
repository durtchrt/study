package book.programmingscala.chapter03

import scala.io.Source
import scala.util.control.NonFatal

object TryCatch {


  def main(args: Array[String]) = {
    args foreach ( arg => countLines(arg))
  }

//  import scala.io.Source

  def countLines(fileName: String): Unit = {
    println()
    var source: Option[Source] = None
    try {
      source = Some(Source.fromFile(fileName))
      val size = source.get.getLines().size
      println(s"file $fileName has $size lines")
    } catch {
      case NonFatal(ex) => println(s"Non fatal exception! $ex")
    } finally {
      for (s <- source) {
        println(s"closing $fileName")
        s.close()
      }
    }
  }
}
