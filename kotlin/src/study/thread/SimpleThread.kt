package study.thread.p01

fun main(args: Array<String>) {
    var message = "Hello KSUG"
    var tread1 = ThreadSample(message)
    tread1.setDaemon(true)
    tread1.start()
    tread1.join()

    var runnable = Runnable {
        Thread.sleep(500)
        println("message from ThreadSample: ${message}")
        showThreadInfo()
        Thread.sleep(500)
    }

    var thread2 = Thread( runnable )
    thread2.setDaemon(true)
    thread2.start()
    thread2.join()

}

fun showThreadInfo() {
        val t = Thread.currentThread()
        val text = """
            |==============================
            |thread
            | - id: ${t.id}
            | - name: ${t.name}
            | - priority: ${t.priority}
            | - state: ${t.state}
            | - groupName: ${t.threadGroup.name}
            | - parentName: ${t.threadGroup.parent.name}
            |==============================
        """.trimMargin()
        println(text)
}

class ThreadSample(message: String): Thread() {
    val message = message

    override fun run() {
        Thread.sleep(500)
        println("message from ThreadSample: ${message}")
        showThreadInfo()
        Thread.sleep(500)
    }
}