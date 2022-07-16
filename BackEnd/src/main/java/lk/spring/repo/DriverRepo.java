package lk.spring.repo;


import lk.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Driver findTopByOrderByDriverIDDesc();

}
