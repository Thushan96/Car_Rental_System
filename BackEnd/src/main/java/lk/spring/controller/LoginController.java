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

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveLogin(@RequestBody LoginDTO login) {
        loginService.saveLogin(login);
        return new ResponseUtil(200, "Saved", null);
    }




    @PostMapping(path = "/up",consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveFile(@RequestPart("nic1") MultipartFile nicf, @RequestPart("nic2") MultipartFile nicb, @RequestPart("license") MultipartFile licenseFile) {

        try {
            // Let's get the project location
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
            // Let's create a folder there for uploading purposes, if not exists
            File uploadsDir = new File(projectPath + "/lk/spring/Images");
            uploadsDir.mkdir();
            // It is time to transfer the file into the newly created dir
            nicf.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + nicf.getOriginalFilename()));
            nicb.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + nicb.getOriginalFilename()));
            licenseFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + licenseFile.getOriginalFilename()));

            return true;

        } catch (URISyntaxException e) {
            e.printStackTrace();
            return false;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping(path = "/{userName}/{password}")
    public ResponseUtil searchUserNameAndPw(@PathVariable String userName, @PathVariable String password) {

        if (adminService.findByUserNameAndPassword(userName, password)) {
            return new ResponseUtil(200, "Done", "Admin");
        } else {
            if (driverService.findByUserNameAndPassword(userName, password)) {
                return new ResponseUtil(200, "Done", "Driver");
            } else {
                if (customerService.findByUserNameAndPassword(userName, password)) {
                    return new ResponseUtil(200, "Done", "Customer");
                } else {
                    return new ResponseUtil(200, "Done", "No");
                }
            }
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
