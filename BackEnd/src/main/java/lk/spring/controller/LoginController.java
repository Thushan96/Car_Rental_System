package lk.spring.controller;

import lk.spring.dto.LoginDTO;
import lk.spring.service.AdminService;
import lk.spring.service.CustomerService;
import lk.spring.service.DriverService;
import lk.spring.service.LoginService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("login")
public class LoginController {

    @Autowired
    CustomerService customerService;

    @Autowired
    AdminService adminService;

    @Autowired
    DriverService driverService;

    @Autowired
    LoginService loginService;

    private static final ArrayList<String> allImages = new ArrayList<>();


    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveLogin(@RequestBody LoginDTO login) {
        loginService.saveLogin(login);
        return new ResponseUtil(200, "Saved", null);
    }


    @GetMapping(path = "/{userName}/{password}")
    public ResponseUtil searchUserNameAndPw(@PathVariable String userName, @PathVariable String password) {

        if (adminService.findByUserNameAndPassword(userName, password)) {
            return new ResponseUtil(200, "Done", "Admin");
        } else if (driverService.findByUserNameAndPassword(userName, password)){
            return new ResponseUtil(200, "Done", "Driver");
        }else if (customerService.findByUserNameAndPassword(userName, password)){
            return new ResponseUtil(200, "Done", "Customer");
        }else {
            return new ResponseUtil(200, "Done", "No");
        }

    }

        @GetMapping(path = "/{userName}")
        public ResponseUtil searchUserName(@PathVariable String userName) {
            System.out.println(adminService.findByUserName(userName) + " - " + driverService.findByUserName(userName) + " - " + customerService.findByUserName(userName));
            if (adminService.findByUserName(userName) || driverService.findByUserName(userName) || customerService.findByUserName(userName)) {
                return new ResponseUtil(400, "error", "Already using this user Name. Please use another name");
            } else {
                return new ResponseUtil(200, "Done", "no");
            }


        }

        @GetMapping(path = "/get/log/lastLogId")
        public ResponseUtil getLastLoginID(){
            String lastID = loginService.getLastID();

            return new ResponseUtil(200,"Done",lastID);
        }

        @GetMapping(path = "/newLogId")
        public ResponseUtil getNewLoginID(){
            String newID = loginService.genarateLogID();

            return new ResponseUtil(200,"Done",newID);
        }

        @GetMapping(path = "/lastLogUser")
        public ResponseUtil getLoginUserName(){
            LoginDTO loginDTO = loginService.searchLogin(loginService.getLastID());
            System.out.println("loginDTO "+loginDTO.getUserName());
            return new ResponseUtil(200,"Done",loginDTO.getUserName());
        }

}
