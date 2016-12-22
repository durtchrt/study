
import com.sun.tools.classfile.*;

import org.slf4j.*;

import akka.actor.*;

public class Main {

    private static Logger log = LoggerFactory.getLogger(Main.class);

    public static class Counter {
        private int count =0;

        public void incr() {
            count++;
            log.info(Thread.currentThread().getName() + " : " + count);
        }

    }

    public static void main(String[] args) {

//        ActorSystem actorSystem = ActorSystem.create("test");
//        ActorRef actorRef = actorSystem.actorOf(Props.create(Counter.class));
        Counter counter = new Counter();
        for (int i = 0; i < 10 ; i++) {
            new Thread(() ->{
//                actorRef.tell(new Counter.Incr(), ActorRef.noSender());
                counter.incr();

            }).start();
        }

    }
}


