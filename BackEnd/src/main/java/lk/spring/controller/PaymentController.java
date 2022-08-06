package lk.spring.controller;

import lk.spring.dto.BookingDTO;
import lk.spring.dto.PaymentDTO;
import lk.spring.service.PaymentService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("payment")
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil savePayment(@RequestBody PaymentDTO payment){
        paymentService.savePayment(payment);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updatePayment(@RequestBody PaymentDTO payment){
        paymentService.updatePayment(payment);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayments(){
        return new ResponseUtil(200,"Ok",paymentService.getAllPayments());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchPayments(@PathVariable String id){
        return new ResponseUtil(200,"Ok",paymentService.searchPayment(id));
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deletePayments(@PathVariable String id){
        paymentService.deletePayment(id);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "/get/{id}")
    public ResponseUtil getAllPaymentByCustomer(@PathVariable String id){
        return new ResponseUtil(200,"Done",paymentService.getPaymentCid(id));
    }

    @GetMapping(path= "/paymentId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getLastPayment(){
        PaymentDTO lastPaymentById = paymentService.findLastPaymentById();
        String id=null;
        if (lastPaymentById!= null) {
            int tempId = Integer.parseInt(lastPaymentById.getPaymentID().split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "P-000" + tempId;
            } else if (tempId <= 99) {
                id = "P-00" + tempId;
            } else if (tempId <= 999) {
                id = "P-0" + tempId;
            } else if (tempId <= 9999) {
                id = "P-" + tempId;
            }
        } else {
            id = "P-0001";
        }

        return new  ResponseUtil(200,"0k",id);
    }
}
