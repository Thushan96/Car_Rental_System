package lk.spring.controller;


import lk.spring.dto.BookingReturnDTO;
import lk.spring.service.BookingReturnService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("booking_Return")
public class BookingReturnController {

    @Autowired
    BookingReturnService bookingReturnService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveBookingReturn(@RequestBody BookingReturnDTO bookingReturn){
        bookingReturnService.saveBookingReturn(bookingReturn);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateBookingReturn(@RequestBody BookingReturnDTO bookingReturn){
        bookingReturnService.updateBookingReturn(bookingReturn);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllBookingReturn(){
        return new ResponseUtil(200,"Ok",bookingReturnService.getAllBookingReturns());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchBookingReturn(@PathVariable String id){
        return new ResponseUtil(200,"Ok",bookingReturnService.searchBookingReturn(id));
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteBookingReturn(@PathVariable String id){
        bookingReturnService.deleteBookingReturn(id);
        return new ResponseUtil(200,"Deleted",null);
    }
}
