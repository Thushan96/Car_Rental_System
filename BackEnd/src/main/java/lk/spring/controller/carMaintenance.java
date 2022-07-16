package lk.spring.controller;

import lk.spring.dto.MaintainceDTO;
import lk.spring.service.CarMaintenanceService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("carMaintenance")
public class carMaintenance {

    @Autowired
    CarMaintenanceService carMaintenanceService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCarMaintenance(@RequestBody MaintainceDTO maintenance){
        carMaintenanceService.saveCarMaintenance(maintenance);
        return new ResponseUtil(200,"Saved",null);
    }

    @PutMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil updateCarMaintenance(@RequestBody MaintainceDTO maintenance){
        carMaintenanceService.updateCarMaintenance(maintenance);
        return new ResponseUtil(200,"Updated",null);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCarMaintenance(){
        return new ResponseUtil(200,"Ok",carMaintenanceService.getCarMaintenance());
    }

    @GetMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchCarMaintenance(@PathVariable String id){
        return new ResponseUtil(200,"Ok",carMaintenanceService.searchCarMaintenance(id));
    }

    @DeleteMapping(path = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil deleteCarMaintenance(@PathVariable String id){
        carMaintenanceService.deleteCarMaintenance(id);
        return new ResponseUtil(200,"Deleted",null);
    }
}
