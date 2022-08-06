package lk.spring.repo;

import lk.spring.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment,String> {

    @Query(value = "SELECT p from Payment p where p.booking.customer.customerID=:custId")
    List<Payment> getPaymentCid(String custId);

    Payment findTopByOrderByPaymentIDDesc();
}
