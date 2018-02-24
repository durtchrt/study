package config;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.Connection;
import java.util.List;

@Component
public class Dao {
    private JdbcTemplate jdbcTemplate;
    public Dao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @PostConstruct
    private void init() {
        jdbcTemplate.execute("drop table if exists test;create table test(id int primary key)");
    }

    @Transactional
    public void insert() {
        Connection con = DataSourceUtils.getConnection(this.jdbcTemplate.getDataSource());
        System.out.println("::con>s" +con);
        jdbcTemplate.update("insert into test values(1)");
        jdbcTemplate.update("insert into test values(2)");
        jdbcTemplate.update("insert into test values(3)");
//        throw 에러를 날리면 aop point cut이 못잡음
        if(true) throw new RuntimeException();
        jdbcTemplate.update("insert into test values(4)");
        jdbcTemplate.update("insert into test values(5)");
        jdbcTemplate.update("insert into test values(6)");
    }

    public List<Integer> select() {
        return jdbcTemplate.query("select id from test", (resultSet, i) -> resultSet.getInt(1));
    }
}
