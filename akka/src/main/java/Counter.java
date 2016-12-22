import akka.actor.*;

public class Counter extends UntypedActor  {


    private int count = 0;
    @Override
    public void onReceive(Object message) throws Throwable {


    }

    static public class Incr {

    }

}
