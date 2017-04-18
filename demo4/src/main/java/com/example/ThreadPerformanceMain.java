package com.example;

import org.springframework.util.*;

import java.io.*;
import java.net.*;
import java.util.*;
import java.util.stream.*;

import lombok.*;
import lombok.extern.slf4j.*;
import reactor.util.function.*;

public class ThreadPerformanceMain {
    public static void main(String[] args) throws IOException {
        StopWatch stopWatch = new StopWatch();

        stopWatch.start();

        int sum = IntStream.range(100000, 200000)
                .parallel()
                .map(x -> factorial(x))
                .sum();

        System.out.println(sum);

        stopWatch.stop();
        System.out.println(stopWatch.prettyPrint());

        System.out.println("----------------------------------");

        stopWatch.start();

        Stream.of("http://springcamp.io",
                    "http://www.daum.net",
                    "http://www.ibm.com/kr-ko/",
                    "http://www.woowahan.com/",
                    "http://d2.naver.com/home",
                    "http://jiandson.co.kr/",
                    "http://www.jpub.kr/",
                    "http://spring.io")
            .parallel()
            .map(x -> showHTML(x))
            .forEach(System.out::println);
        stopWatch.stop();
        System.out.println(stopWatch.prettyPrint());

    }

    private static int factorial(int limit) {
//        if(limit == 1) return 1;
//        else {
//            return limit + factorial(limit - 1);
//        }
        int result = 0;
        for(int i = limit; i > 0; i--) {
            result += i;
        }
        return result;
    }

    private static String showHTML(String x) {
        try(InputStream is = new URL(x).openStream();
            InputStreamReader isr = new InputStreamReader(is);
            BufferedReader reader = new BufferedReader(isr)) {

            String inputLine;
            String html = "";
            while((inputLine = reader.readLine()) != null) {
                html += inputLine;
            }
            return html;
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }
}
