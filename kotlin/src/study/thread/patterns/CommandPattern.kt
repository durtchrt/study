package examples.p00

//http://www.blackwasp.co.uk/DesignPatternsArticles.aspx
//http://www.blackwasp.co.uk/Command.aspx
fun main(args: Array<String>) {
    Client().run()
}

class Client {
    val invoker = Invoker()
    val reciever = Reciever()
    val aCommand = ACommand(reciever)
    val bCommand = BCommand(reciever)

    fun run() {
        invoker.setCommand(aCommand)
        invoker.execute()

        invoker.setCommand(bCommand)
        invoker.execute()
    }
}

class Reciever {
    fun action(message: String) {
        println("reciever message : ${message}")
    }
}

abstract class Command(reciever: Reciever) {
    val reciever = reciever
    abstract fun execute()
}

class ACommand(reciever: Reciever): Command(reciever) {
    override fun execute() {
        reciever.action("A Command")
    }
}

class BCommand(reciever: Reciever): Command(reciever) {
    override fun execute() {
        reciever.action("B Command")
    }
}

class Invoker {
    private var command: Command? = null
    fun setCommand(command:Command) {
        this.command = command
    }

    fun execute() {
        this.command?.execute()
    }
}

