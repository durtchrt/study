import config.Config;
import config.Service;
import org.h2.tools.Server;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) throws InterruptedException, SQLException {
        Server server = Server.createTcpServer().start();

        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
        Service service = context.getBean(Service.class);
        service.serve();

        server.stop();
        context.close();
        System.out.println("program exit");

    }
}
