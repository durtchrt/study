package config;

import org.springframework.stereotype.Component;

import java.sql.SQLException;

@Component
public class Service {
    private final Dao dao;

    public Service(Dao dao) {
        this.dao = dao;
    }

    public void serve() {
        try {
            dao.insert();
        } catch (Exception e) {
//            e.printStackTrace();
        }
//        System.out.println("count: " + dao.select().size());
        dao.select().forEach(System.out::println);
    }
}
