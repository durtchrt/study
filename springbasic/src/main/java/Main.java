import config.Config;
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

//        jdbc:h2:tcp://localhost/~/test
        Server server = Server.createTcpServer().start();

        AbstractApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
        DataSource dataSource = context.getBean(DataSource.class);
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        jdbcTemplate.execute("drop table if exists test;create table test(id int primary key)");

        jdbcTemplate.update("insert into test values(1)");
        jdbcTemplate.update("insert into test values(2)");
        jdbcTemplate.update("insert into test values(3)");
        jdbcTemplate.update("insert into test values(4)");
        jdbcTemplate.update("insert into test values(5)");
        jdbcTemplate.update("insert into test values(6)");

        List<Integer> list = jdbcTemplate.query("select id from test", new RowMapper<Integer>() {
            @Override
            public Integer mapRow(ResultSet resultSet, int i) throws SQLException {
                return resultSet.getInt(1);
            }
        });

        list.forEach(System.out::println);

        server.stop();
        context.close();
        System.out.println("program exit");

    }
}
