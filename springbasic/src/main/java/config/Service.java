package config;

import domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import repositories.UserRepository;

import java.sql.SQLException;

//@Component
@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private UserRepository userRepo;

//    public Service(UserRepository userRepo) {
//        this.userRepo = userRepo;
//    }

    @Transactional
    public void serve() {
        userRepo.save(new User("1"));
        userRepo.save(new User("2"));
        userRepo.save(new User("3"));
        userRepo.save(new User("4"));
        userRepo.save(new User("5"));

        userRepo.findAll().forEach(System.out::println);

    }
}
