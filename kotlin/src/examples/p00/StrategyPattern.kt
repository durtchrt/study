package examples.p01

//http://www.blackwasp.co.uk/DesignPatternsArticles.aspx
//http://www.blackwasp.co.uk/Command.aspx
fun main(args: Array<String>) {
    Client().run()
}

class Client {
    fun run() {
        var strategy:Strategy = AStrategy()
        strategy.algorithm()

        strategy = BStrategy()
        strategy.algorithm()
    }
}

interface Strategy {
    fun algorithm()
}

class AStrategy: Strategy {
    override fun algorithm() {
        println("Hello A strategy")
    }
}

class BStrategy: Strategy {
    override fun algorithm() {
        println("Hello B strategy")
    }
}

