package lk.spring.service.Impl;

import lk.spring.config.WebAppConfig;
import lk.spring.dto.BookingDTO;
import lk.spring.dto.CarDTO;
import lk.spring.dto.CustomerDTO;
import lk.spring.dto.DriverDTO;
import lk.spring.service.BookingService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@WebAppConfiguration
@ContextConfiguration(classes = {WebAppConfig.class})
@ExtendWith(SpringExtension.class)
@Transactional
public class BookingServiceImplTest {

    @Autowired
    BookingService bookingService;

    @Test
    void SaveBooking(){
        CustomerDTO custdto=new CustomerDTO();
        custdto.setCustomerID("C001");
        CarDTO cardto=new CarDTO();
        cardto.setCarID("C-001");
        DriverDTO driverDTO=new DriverDTO();
        driverDTO.setDriverID("D001");

        BookingDTO bookingDTO = new BookingDTO("B001", "20-07-2022", "20-09-2021", "20-08-2021", "booked", custdto, cardto, driverDTO);
        bookingService.saveBooking(bookingDTO);
    }

    @Test
    void getAllBookings(){
        SaveBooking();
        List<BookingDTO> allBooking = bookingService.getAllBooking();
        for (BookingDTO bookingDTO : allBooking) {
            System.out.println(bookingDTO);

        }
    }

    @Test
    void getLastBooking(){
        SaveBooking();
        BookingDTO lastBookingById = bookingService.findLastBookingById();
        System.out.println(lastBookingById);
    }
}
