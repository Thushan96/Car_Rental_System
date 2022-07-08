package lk.spring.service.impl;

import lk.spring.dto.BookingDTO;
import lk.spring.entity.Booking;
import lk.spring.repo.BookingRepo;
import lk.spring.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BookingServiceImpl implements BookingService {
    @Autowired
    ModelMapper mapper;

    @Autowired
    BookingRepo bookingRepo;

    @Override
    public void saveBooking(BookingDTO dto) {
        if (!bookingRepo.existsById(dto.getBookingID())){
            bookingRepo.save(mapper.map(dto, Booking.class));
        }else{
            throw new RuntimeException("Already Booked! Try Again");
        }
    }

    @Override
    public void updateBooking(BookingDTO dto) {
        if (bookingRepo.existsById(dto.getBookingID())){
            bookingRepo.save(mapper.map(dto,Booking.class));
        }else{
            throw new RuntimeException("Booking Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteBooking(String id) {

    }

    @Override
    public BookingDTO searchBooking(String id) {
        if (bookingRepo.existsById(id)) {
            return mapper.map(bookingRepo.findById(id).get(), BookingDTO.class);
        }else{
            throw new RuntimeException("No Booking made For " + id + " ..!");
        }
    }

    @Override
    public List<BookingDTO> getAllBooking() {
        return mapper.map(bookingRepo.findAll(), new TypeToken<List<BookingDTO>>() {
        }.getType());
    }

    @Override
    public BookingDTO findLastBookingById() {
        if (bookingRepo.findTopByOrderByIdDesc()==null){
            return null;
        }else{
            return mapper.map(bookingRepo.findTopByOrderByIdDesc(), BookingDTO.class);
        }
    }
}
