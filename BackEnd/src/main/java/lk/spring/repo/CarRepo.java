package lk.spring.repo;

import lk.spring.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {


    List<Car> readByCarType(String type);

    @Query(value = "SELECT COUNT(carId) FROM Car ",nativeQuery = true)
    int getCarCount();


}
