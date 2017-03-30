package reactive.client;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.boot.builder.*;
import org.springframework.context.annotation.*;
import org.springframework.http.*;
import org.springframework.web.reactive.function.client.*;

import java.util.*;

import reactive.service.Event;

@SpringBootApplication
public class ReactiveClientApplication {
    @Bean
    WebClient client() {
        return WebClient.create("http://localhost:8080");
    }

    @Bean
    CommandLineRunner demo(WebClient client) {
        return args -> {
            client
                .get()
                .uri("/events")
                .accept(MediaType.TEXT_EVENT_STREAM)
                .exchange()
                .flatMap(cr -> cr.bodyToFlux(Event.class))
                .subscribe( System.out::println);
        };
    }

    public static void main(String[] args) {
        new SpringApplicationBuilder(ReactiveClientApplication.class)
            .properties(Collections.singletonMap("server.port", "8081"))
            .run(args);
    }
}
