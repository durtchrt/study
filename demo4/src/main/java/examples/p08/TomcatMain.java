package examples.p08;

import org.apache.catalina.*;
import org.apache.catalina.startup.*;
import org.apache.tomcat.util.scan.*;

import java.io.*;

import javax.servlet.*;
import javax.servlet.http.*;

public class TomcatMain {
    public static void main(String[] args) throws LifecycleException,
            InterruptedException, ServletException {

        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8082);

        Context ctx = tomcat.addContext("/", new File(".").getAbsolutePath());
        Tomcat.addServlet(ctx, "Embedded", new AsyncInputStreamServlet());
        ctx.addServletMapping("/*", "Embedded");

        tomcat.start();
        tomcat.getServer().await();
    }
}
