package lk.spring.service;

import lk.spring.dto.BookingDTO;


import java.util.List;

public interface BookingService {
    void saveBooking(BookingDTO dto);
    void updateBooking(BookingDTO dto);
    void deleteBooking(String id);
    BookingDTO searchBooking(String id);
    List<BookingDTO> getAllBooking();
    BookingDTO findLastBookingById();

    List<BookingDTO> getBookinginId(String id);

    List<BookingDTO> getBookingMultiStatus(String id);

    List<BookingDTO> readByStatus(String status);

    int getBookingCount();
}
