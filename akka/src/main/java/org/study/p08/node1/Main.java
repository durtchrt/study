package org.study.p08.node1;

import com.typesafe.config.*;

import org.study.p08.node1.http.*;
import org.study.p08.service.*;

import java.io.*;

import akka.actor.*;
import akka.routing.*;

public class Main {

    public static void main(String[] args) {
        String configFile =  Main.class.getClassLoader().getResource("application.conf").getFile();
        Config config = ConfigFactory.parseFile(new File(configFile));

        ActorSystem actorSystem = ActorSystem.create("ClusterSystem");
        ActorRef router = actorSystem.actorOf(Props.create(PingService.class).withRouter(new FromConfig()), "serviceRouter");
        ActorRef httpActor = actorSystem.actorOf(Props.create(HttpActor.class, router), "httpActor");
    }

}
