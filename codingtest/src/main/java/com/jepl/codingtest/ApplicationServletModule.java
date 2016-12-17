package com.jepl.codingtest;

import com.google.inject.servlet.*;

public class ApplicationServletModule extends ServletModule {
    @Override
    protected void configureServlets() {
        bind(FooServlet.class);
        bind(BarServlet.class);
        bind(IndexServlet.class);

        serve("/foo").with(FooServlet.class);
        serve("/bar").with(BarServlet.class);
        serve("/*").with(IndexServlet.class);
    }

}
