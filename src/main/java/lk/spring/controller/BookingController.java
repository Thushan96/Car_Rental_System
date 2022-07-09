package lk.spring.controller;

import lk.spring.dto.BookingDTO;
import lk.spring.dto.DriverDTO;
import lk.spring.service.BookingService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("booking")
public class BookingController{
    @Autowired
    BookingService bookingService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveBooking(@RequestBody BookingDTO booking){
        bookingService.saveBooking(booking);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateBooking(@RequestBody BookingDTO booking){
        bookingService.updateBooking(booking);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllBookings(){
        return new ResponseUtil(200,"Ok",bookingService.getAllBooking());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchBooking(@PathVariable String id){
        return new ResponseUtil(200,"Ok",bookingService.searchBooking(id));
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteBooking(@PathVariable String id){
        bookingService.deleteBooking(id);
        return new ResponseUtil(200,"Ok",null);
    }

    @GetMapping(params = {"bookingId"},produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getLastBooking(){
        BookingDTO lastBookingById = bookingService.findLastBookingById();
        String id=null;
        if (lastBookingById!= null) {
            int tempId = Integer.parseInt(lastBookingById.getBookingID().split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "B-000" + tempId;
            } else if (tempId <= 99) {
                id = "B-00" + tempId;
            } else if (tempId <= 999) {
                id = "B-0" + tempId;
            } else if (tempId <= 9999) {
                id = "B-" + tempId;
            }
        } else {
            id = "B-0001";
        }

        return new  ResponseUtil(200,"0k",id);
    }
}
