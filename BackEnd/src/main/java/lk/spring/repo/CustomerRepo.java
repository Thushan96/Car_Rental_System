package lk.spring.repo;

import lk.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepo extends JpaRepository<Customer,String> {

    Customer findTopByOrderByCustomerIDDesc();
    Optional<Customer> findByUserName(String userName);

    Optional<Customer> findByUserNameAndPassword(String userName, String password);

    Customer getCustomerByUserName(String UserName);



}
