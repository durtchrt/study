package config;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
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

    public void insert() {
        jdbcTemplate.update("insert into test values(1)");
        jdbcTemplate.update("insert into test values(2)");
        jdbcTemplate.update("insert into test values(3)");
        jdbcTemplate.update("insert into test values(4)");
        jdbcTemplate.update("insert into test values(5)");
        jdbcTemplate.update("insert into test values(6)");
    }

    public List<Integer> select() {
        return jdbcTemplate.query("select id from test", (resultSet, i) -> resultSet.getInt(1));
    }
}
