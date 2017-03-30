package org.projectreactor

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import reactor.core.publisher.Mono
import reactor.core.publisher.MonoProcessor
import reactor.core.publisher.Signal.subscribe
import java.util.Arrays
import reactor.core.publisher.Flux
import reactor.core.publisher.UnicastProcessor
import com.sun.corba.se.spi.presentation.rmi.StubAdapter.request
import org.reactivestreams.Subscription
import org.springframework.http.client.reactive.ReactorClientHttpConnector
import org.springframework.web.reactive.function.client.ClientRequest
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.BaseSubscriber







val LOG: Logger = LoggerFactory.getLogger("org.projectreactor")

fun main(args: Array<String>) {
    val promise = MonoProcessor.create<String>()
    val result: Mono<String> = promise.doOnSuccess { LOG.info("Promise completed ${it}") }
            .doOnTerminate { s, e -> LOG.info("Got value: ${s}") }
            .doOnError { LOG.error(it.message, it) }
            .subscribe()

    promise.onNext("Hello World!")
    result.blockMillis(1_000)

    val source = Flux.fromIterable(Arrays.asList("blue", "green", "orange", "purple"))
            .doOnNext({ println(it) })
            .filter { color -> color == "orange" }
            .map<String>{ it.toUpperCase() }


    source.subscribe { d -> println("Subscriber 1: " + d) }
    source.subscribe { d -> println("Subscriber 2: " + d) }
    source.subscribe { d -> println("Subscriber 3: " + d) }


    val hotSource = UnicastProcessor.create<String>()

    val hotFlux = hotSource.doOnNext{ println(it) }
            .publish()
            .autoConnect()

    hotFlux.subscribe { d -> println("Subscriber 1 to Hot Source: " + d) }

    hotSource.onNext("blue")
    hotSource.onNext("green")

    hotFlux.subscribe { d -> println("Subscriber 2 to Hot Source: " + d) }

    hotSource.onNext("orange")
    hotSource.onNext("purple")
    hotSource.onComplete()


    val source2: Flux<String> = Flux.just<String>("111")

    source2.map { it.toUpperCase() }
            .subscribe(object : BaseSubscriber<String>() {
                override fun hookOnSubscribe(subscription: Subscription) {
                    println(">>>")
                    request(1)
                }

                override fun hookOnNext(value: String) {
                    println(">>>>>>${value}")
                    request(1)
                }

            })

    val flux = Flux.generate<String, Int>(
     { 0 },
     { state, sink ->
        sink.next("3 x " + state + " = " + 3 * state!!)
        if (state === 10) sink.complete()
        state + 1
    })
    flux.subscribe { println("${it}") }

//    val client = WebClient.create(ReactorClientHttpConnector())
//    val request = ClientRequest.GET("http://example.com/resource").build()
//
//    val result = client
//            .exchange(request)
//            .then({ response -> response.bodyToMono(String::class.java) })
//    val result = client
//            .exchange(request)
//            .then({ response -> response.bodyToMono(String::class.java) })
}

