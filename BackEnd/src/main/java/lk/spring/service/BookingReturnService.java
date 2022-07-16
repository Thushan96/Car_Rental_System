package lk.spring.service;

import lk.spring.dto.BookingReturnDTO;

import java.util.List;

public interface BookingReturnService {
    void saveBookingReturn(BookingReturnDTO dto);
    void updateBookingReturn(BookingReturnDTO dto);
    void deleteBookingReturn(String id);
    BookingReturnDTO searchBookingReturn(String id);
    List<BookingReturnDTO> getAllBookingReturns();
}
