package config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@ComponentScan("config")
@EnableAspectJAutoProxy
public class Config {
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setDriverClassName("org.h2.Driver");
        config.setJdbcUrl("jdbc:h2:tcp://localhost/~/test;DB_CLOSE_ON_EXIT=FALSE;AUTO_SERVER=TRUE");
        config.setUsername("sa");
        config.setPassword("");
        return new HikariDataSource(config);
    }

//    @Bean
//    public PlatformTransactionManager txManager() {
//        return new DataSourceTransactionManager(dataSource());
//    }

}
