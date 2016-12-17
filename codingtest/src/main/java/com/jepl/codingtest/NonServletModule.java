package com.jepl.codingtest;

import com.google.inject.*;

public class NonServletModule extends AbstractModule{

    protected void configure() {
        bind(NonSer);

    }
}
