//package org.projectreactor
//
//import reactor.core.publisher.EmitterProcessor
//import reactor.core.publisher.Flux
//import reactor.core.publisher.Mono
//
//fun main(args: Array<String>) {
//    simpleFlux()
//    transformValues()
//    filterValues()
//}
//
//fun filterValues() {
//    val stream = EmitterProcessor.create<String>().connect()
//    val promise = stream.filter { it.startsWith("Hello") }
//            .doOnNext { LOG.info("Filtered String ${it}") }
//            .collectList()
//            .subscribe()
//    stream.onNext("Hello World!")
//    stream.onNext("Goodbye World!")
//    stream.onComplete()
//
//    promise.block()
//}
//
//fun transformValues() {
//    val stream = EmitterProcessor.create<String>().connect()
//
//    val promise = stream.map { it.toUpperCase() }
//            .doOnNext { LOG.info("UC String ${it}") }
//            .next()
//            .subscribe()
//
//    stream.onNext("Hello World")
//    promise.block()
//}
//
//fun simpleFlux() {
//    val stream = EmitterProcessor.create<String>().connect()
//
//    val promise = stream.doOnNext { LOG.info("Consumed String ${it}") }
//            .next()
//            .subscribe()
//
//    stream.onNext("Hello World 1")
//    stream.onNext("Hello World 2")
//    stream.onNext("Hello World 3")
//
//    promise.block()
//
//}
//
