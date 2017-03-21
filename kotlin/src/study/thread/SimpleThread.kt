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
        val id = t.getId()
        val name = t.getName()
        val priority = t.getPriority()
        val state = t.getState()
        val threadGroup = t.getThreadGroup()
        val groupName = threadGroup.getName()
        val parent = t.getThreadGroup().getParent()
        val parentName = parent.getName()

        val text = """
            |==============================
            |thread
            | - id: ${id}
            | - name: ${name}
            | - priority: ${priority}
            | - state: ${state}
            | - groupName: ${groupName}
            | - parentName: ${parentName}
            |==============================
        """.trimMargin()
        print(text)
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