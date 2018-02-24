import config.Config;
import config.Service;
import org.h2.tools.Server;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws SQLException {
        Server server = Server.createTcpServer().start();

        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
        Service service = context.getBean(Service.class);
        try {
            service.serve();
        } catch (Throwable e) {
            System.out.println("error : " + e);
        }

        server.stop();
        context.close();
        System.out.println("program exit");

    }
}
