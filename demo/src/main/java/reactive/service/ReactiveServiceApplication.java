package reactive.service;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.util.*;
import java.util.stream.*;

import reactor.core.publisher.*;
import reactor.util.function.*;

@SpringBootApplication
@RestController
public class ReactiveServiceApplication {

    @GetMapping("/events/{id}")
    Mono<Event> evnetById(@PathVariable long id) {
        return Mono.just(new Event(id, new Date()));
    }

    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE, value="/events")
    Flux<Event> events() {
        Flux<Event> eventFlux = Flux.fromStream(Stream.generate(() -> new Event(System.currentTimeMillis(), new Date())));
        Flux<Long> durationFlux = Flux.interval(Duration.ofSeconds(1));
        return Flux.zip(eventFlux, durationFlux).map(Tuple2::getT1);

    }

    public static void main(String[] args) {
        SpringApplication.run(ReactiveServiceApplication.class, args);
    }
}
