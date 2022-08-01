package lk.spring.repo;


import lk.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DriverRepo extends JpaRepository<Driver,String> {

    Driver findTopByOrderByDriverIDDesc();
    Optional<Driver> findByUserName(String userName);

    Optional<Driver> findByUserNameAndPassword(String userName, String password);

    @Query(value = "SELECT d FROM Driver d WHERE d.userName=:userName")
    Driver getDriver(@Param("userName") String userName);

    List<Driver> findByAvailable(boolean available);

}
