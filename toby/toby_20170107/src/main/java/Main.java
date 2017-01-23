import java.util.function.*;

import jdk.management.resource.*;

public class Main {

    public static interface FF<String, V> {
        V apply(String o);
    }
    public static void main(String[] args) {

//        Function<Integer, String> a = o -> "2";
        FF<String, Integer> ff = o -> 1;
        System.out.println(ff.apply(""));

        FF ff2 = o -> 1;
        System.out.println(ff2.apply("").getClass().getSimpleName());


    }
}
