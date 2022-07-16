package lk.spring.repo;

import lk.spring.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking,String> {

    Booking findTopByOrderByBookingIDDesc();
}
