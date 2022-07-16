package lk.spring.repo;

import lk.spring.entity.BookingReturn;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingReturnRepo extends JpaRepository<BookingReturn,String> {

}
