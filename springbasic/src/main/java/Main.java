import config.Config;

import javax.servlet.Servlet;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;


public class Main {
    public static void main(String[] args) throws Exception {

//        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
//        Service service = context.getBean(Service.class);
//        try {
//            service.serve();
//        } catch (Throwable e) {
//            System.out.println("error : " + e);
//        }
//
//        Thread.sleep(Long.MAX_VALUE);
//
//        context.close();
//        System.out.println("program exit");

    }
}

//class ApplicationInitializer implements WebApplicationInitializer {

    //Called first when the application starts loading.
//    public void onStartup(ServletContext servletContext)
//            throws ServletException {
//        System.out.println("Inside application initializer...");
//
//        //Registering the class that incorporates the annotated DispatcherServlet configuration of spring
//        AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
//        rootContext.register(Config.class);
//
//        //Adding the listener for the rootContext
//        servletContext.addListener(new ContextLoaderListener(rootContext));
//
//        //Registering the dispatcher servlet mappings.
//        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcher", new DispatcherServlet(rootContext));
//        dispatcher.setLoadOnStartup(1);
//        dispatcher.addMapping("/");
//    }

//}
//
