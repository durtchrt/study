package config;

import domain.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.sql.DataSource;
import java.sql.Connection;
import java.util.List;

//@Component
@Repository
public class Dao {
    @PersistenceContext
    private EntityManager em;

    @Transactional
    public void insert() {
        em.persist(new User("1"));
        em.persist(new User("2"));
        em.persist(new User("3"));
        if(true) throw new RuntimeException();
        em.persist(new User("4"));
        em.persist(new User("5"));
    }

    public List<User> select() {
        return em.createQuery("select u from User u").getResultList();
    }
}
