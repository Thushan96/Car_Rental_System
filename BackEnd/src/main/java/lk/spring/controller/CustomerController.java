package lk.spring.controller;

import lk.spring.util.ResponseUtil;
import lk.spring.dto.CustomerDTO;
import lk.spring.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO customer){
        customerService.saveCustomer(customer);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customer){
        customerService.updateCustomer(customer);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers(){
        return new ResponseUtil(200,"Ok",customerService.getAllCustomers());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCustomer(@PathVariable String id){
        return new ResponseUtil(200,"Ok",customerService.searchCustomer(id));
    }

    @GetMapping(path = "/get/{userName}")
    public ResponseUtil getCustomer(@PathVariable String userName){
        CustomerDTO dto = customerService.getCustomer(userName);
        return new ResponseUtil(200,"Done",dto);
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCustomer(@PathVariable String id){
        customerService.deleteCustomer(id);
        return new ResponseUtil(200,"Deleted",null);
    }

    @GetMapping(path = "lastId",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getLastCID(){
        CustomerDTO customerById = customerService.findLastCustomerById();
        String id=null;
        if (customerById!= null) {
            int tempId = Integer.parseInt(customerById.getCustomerID().split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                id = "C-000" + tempId;
            } else if (tempId <= 99) {
                id = "C-00" + tempId;
            } else if (tempId <= 999) {
                id = "C-0" + tempId;
            } else if (tempId <= 9999) {
                id = "C-" + tempId;
            }
        } else {
            id = "C-0001";
        }

        return new  ResponseUtil(200,"0k",id);
    }

    @GetMapping(path = "/custCount")
    public ResponseUtil getCountofCustomer(){
        return new ResponseUtil(200,"Done",customerService.countByCustomerID());
    }

}
