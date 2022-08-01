package lk.spring.controller;


import lk.spring.dto.CarDTO;
import lk.spring.service.CarService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("car")
public class CarController {

    @Autowired
    CarService carService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCar(@RequestBody CarDTO car){
        carService.saveCar(car);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCar(@RequestBody CarDTO car){
        carService.updateCar(car);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCars(){
        return new ResponseUtil(200,"Ok",carService.getAllCars());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCar(@PathVariable String id){
        return new ResponseUtil(200,"Ok",carService.searchCar(id));
    }

    @GetMapping(path = "/get/{type}")
    public ResponseUtil getCarsByType(@PathVariable String type) {
        List<CarDTO> allCars = carService.readByType(type);
        return new ResponseUtil(200, "Done", allCars);
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCar(@PathVariable String id){
        carService.deleteCar(id);
        return new ResponseUtil(200,"Deleted",null);
    }

}
