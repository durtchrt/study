package study;

import com.netflix.hystrix.*;

import java.util.concurrent.*;

import rx.*;

public class CommandHelloWorld extends HystrixCommand<String> {

    private final String name;

    public CommandHelloWorld(String name) {
        super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
        this.name = name;
    }

    @Override
    protected String run() {
        // a real example would do work like a network call here
        return "Hello " + name + "!";
    }

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        String s = new CommandHelloWorld("Bob").execute();
        Future<String> s1 = new CommandHelloWorld("Bob").queue();
        Observable<String> s2 = new CommandHelloWorld("Bob").observe();
        System.out.println(s);
        System.out.println(s1.get());
//        System.out.println(s2.);

    }
}
