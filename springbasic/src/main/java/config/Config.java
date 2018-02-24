package config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import java.util.Properties;

@Configuration
@ComponentScan("config")
@EnableAspectJAutoProxy
@EnableTransactionManagement
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

    @Bean
    public LocalContainerEntityManagerFactoryBean efm() {
        LocalContainerEntityManagerFactoryBean f = new LocalContainerEntityManagerFactoryBean();
        f.setDataSource(dataSource());
        f.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
        Properties prop = new Properties();
        prop.setProperty("hibernate.dialect", "org.hibernate.dialect.H2Dialect");
        prop.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        prop.setProperty("hibernate.ejb.naming_strategy", "org.hibernate.cfg.ImprovedNamingStrateg");
        //If the value of this property is true, Hibernate writes all SQL
        //statements to the console.
        prop.setProperty("hibernate.show_sql", "true" );
        //If the value of this property is true, Hibernate will format the SQL
        //that is written to the console.
        prop.setProperty("hibernate.format_sql", "true");
        f.setJpaProperties(prop);
//        f.setPackagesToScan(new String[]{"domain"});
        f.setPackagesToScan("domain");
        return f;
    }

    // 이건 왜 넣는거지?
    // 안넣어도 트랜젝션 됨...jpa는 로직단에서 exception이 발생하면 트랜젝션을 아예 안동작시키네...
    @Bean
    public PersistenceExceptionTranslationPostProcessor postProcessor() {
        return new PersistenceExceptionTranslationPostProcessor();
    }

    @Bean
    public JpaTransactionManager jtm(EntityManagerFactory efm) {
        JpaTransactionManager manager = new JpaTransactionManager();
        manager.setEntityManagerFactory(efm);
        return manager;
    }
}
