package study.thread.p05;

import org.springframework.util.concurrent.*;

import java.util.*;
import java.util.concurrent.*;

public class ListenableFutureExample {
    public static void main(String[] args) throws Exception {
        Callable callable = () -> "H";
        ListenableFutureTask f = new ListenableFutureTask(callable);
        Set result = new HashSet();
        f.addCallback( x1 -> {
            ListenableFutureTask f1 = new ListenableFutureTask(() -> x1 + "E");
            f1.addCallback( x2 -> {
                ListenableFutureTask f2 = new ListenableFutureTask(() -> x2 + "L");
                f2.addCallback(x3 -> {
                    ListenableFutureTask f3 = new ListenableFutureTask(() -> x3 + "L");
                    f3.addCallback(x4 -> {
                        result.add(x4);
                    }, e4 -> { });
                    f3.run();
                }, e3 -> {
                    System.out.println(e3);
                });
                f2.run();
            }, e2 -> {
                System.out.println(e2);
            } );
            f1.run();
        }, e1 -> { System.out.println(e1); });
        f.run();
        System.out.println(result.iterator().next());
    }
}
