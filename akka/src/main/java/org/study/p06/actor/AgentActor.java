package org.study.p06.actor;

import akka.actor.*;
import akka.agent.*;
import akka.dispatch.*;
import akka.event.*;
import scala.concurrent.*;

public class AgentActor extends UntypedActor {

    private LoggingAdapter log = Logging.getLogger(getContext().system(), this);

    @Override
    public void onReceive(Object messasge) throws Exception {

        ExecutionContext ec = ExecutionContexts.global();
        Agent<Integer> agent = Agent.create(5, ec);

        agent.send(new Mapper<Integer, Integer>() {
            public Integer apply(Integer i) {
                return i * 2;
            }
        });

        // 에이전트의 값이 여전히 5로 출력될 것이다 (아닐 수도)
        log.info("Current agent value = " + agent.get());

        Thread.sleep(100); // 일부러 조금 기다린다 - 실전에서는 절대 금물!!!

        // 에이전트의 값이 10으로 출력될 것이다 (아닐 수도)
        log.info("Current agent value = " + agent.get());
    }

}
