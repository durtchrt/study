package config;

import org.springframework.stereotype.Component;

@Component
public class Service {
    private final Dao dao;

    public Service(Dao dao) {
        this.dao = dao;
    }

    public void serve() {
        dao.insert();
        dao.select().forEach(System.out::println);
    }
}
