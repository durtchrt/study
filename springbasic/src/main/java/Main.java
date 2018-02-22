import config.Config;
import config.Service;
import org.h2.tools.Server;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class Main {
    public static void main(String[] args) throws InterruptedException, SQLException {
        Server server = Server.createTcpServer().start();

        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        context.scan("config");
        context.refresh();
        Service service = context.getBean(Service.class);
        service.serve();

        server.stop();
        context.close();
        System.out.println("program exit");

    }
}
