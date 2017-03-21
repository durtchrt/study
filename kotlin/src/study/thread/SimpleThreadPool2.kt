package study.thread.p03

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
    val workQueue = ConcurrentLinkedQueue<Runnable>()
//    val workQueue: Queue<Runnable> = LinkedList()
    val notifier = Object()
    val set = HashSet<Thread>()


    init {
        for (i in 0..threadLimit - 1) {
            var workThread = WorkThread(this.workQueue, this.notifier)
            set.add(workThread)
            workThread.start()
        }
    }

    fun submit(r: Runnable) {
        this.workQueue.add(r)
        synchronized(notifier) {
            notifier.notify()
        }
    }

}

class WorkThread(val workQueue: Queue<Runnable>, val notifier: Object) : Thread() {

    override fun run() {
        println(currentThread().name)
        while (true) {
//            synchronized(workQueue) {
                if (!workQueue.isEmpty()) {
                    val r = workQueue.poll()
                    // NPE 발생해서 위에서 synchronized 추가
                    r.run()
                } else {
                    //java.lang.IllegalMonitorStateException
                    synchronized(notifier) {
                        notifier.wait()
                    }
                }
//            }
        }
    }
}


