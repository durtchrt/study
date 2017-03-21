package study.thread.callstack

fun main(args: Array<String>) {
    val result = CallStack().call_1()
    println(result)
}

class CallStack {
    fun call_1(): Int {
        val r = call_2() + 1
        return r
    }

    fun call_2(): Int {
        val r = call_3() + 2
        return r
    }

    fun call_3(): Int {
        val r = call_4() + 3
        return r
    }


    fun call_4(): Int {
        val r = call_5() + 4
        return r
    }

    fun call_5(): Int {
        val a = Object()
        return 5
    }


}

fun call_1(): Int {
    val r = call_2() + 1
    return r
}

fun call_2(): Int {
    val r = call_3() + 2
    return r
}

fun call_3(): Int {
    val r = call_4() + 3
    return r
}


fun call_4(): Int {
    val r = call_5() + 4
    return r
}

fun call_5(): Int {
    throw Exception("Error occurred")
    return 5
}






