package lk.spring.repo;

import lk.spring.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingRepo extends JpaRepository<Booking,String> {

    Booking findTopByOrderByBookingIDDesc();


    @Query(value = "SELECT b from Booking b where b.status=:state AND b.driver.driverID=:driverId")
    List<Booking> getAcceptedBookings(@Param("state") String state, @Param("driverId") String driverId);

    @Query(value = "SELECT b from Booking b where b.status=:state1 OR b.status=:state2 AND b.customer.customerID=:custId")
    List<Booking> getBookingByStatusAndCustomer(@Param("state1") String state1, @Param("state2") String state2, @Param("custId") String custId);

    List<Booking> readByStatus(String status);
}
