package org.study.p08.node1.http;

import akka.actor.*;
import akka.camel.*;
import akka.camel.javaapi.*;
import akka.event.*;

public class HttpActor extends UntypedConsumerActor {
    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);
    private String uri;
    private ActorRef service;
    private ActorRef sender;

    public HttpActor(ActorRef service){
        this.service = service;
        this.uri = "jetty:http://localhost:887/akkaStudy";
    }

    @Override
    public void onReceive(Object message) throws Throwable {
        if (message instanceof CamelMessage) {
            this.sender = getSender();
            service.tell("Hello", getSelf());
        } else if (message instanceof String) {
            sender.tell(message, getSelf());
        } else {
            unhandled(message);
        }
    }

    @Override
    public String getEndpointUri() {
        return uri;
    }
}
