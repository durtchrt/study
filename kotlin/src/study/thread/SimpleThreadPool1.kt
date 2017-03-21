package study.thread.p02

//import examples.p02.WorkThread
import java.util.*
import java.util.concurrent.ConcurrentLinkedQueue
import java.util.concurrent.SynchronousQueue

fun main(args: Array<String>) {
    val pool = SimpleThreadPool(3)

    while(true) {
        pool.submit( Runnable {
            println("${Thread.currentThread().getName()} Hello KSUG")
        })
        Thread.sleep(1000)
    }
}

class SimpleThreadPool(private val threadLimit: Int) {
//    val workQueue = ConcurrentLinkedQueue<Runnable>()
    var workQueue: Queue<Runnable> = LinkedList()

    init {
        for (i in 0..threadLimit - 1) {
            WorkThread(this.workQueue).start()
        }
    }

    fun submit(r: Runnable) {
        this.workQueue.add(r)
    }

}

class WorkThread(var workQueue: Queue<Runnable>) : Thread() {
    override fun run() {
        while (true) {
            synchronized(workQueue) {
                if (!workQueue.isEmpty()) {
                    val r = workQueue.poll()
                    // NPE 발생해서 위에서 synchronized 추가
                    r.run()
                }
            }
        }
    }
}


