package lk.spring.controller;

import lk.spring.dto.LoginDTO;
import lk.spring.service.LoginService;
import lk.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("login")
public class LoginController {

    @Autowired
    LoginService loginService;

    @ResponseStatus(HttpStatus.CREATED)//201
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveLogin(@RequestBody LoginDTO login){
        loginService.saveLogin(login);
        return new ResponseUtil(200,"Saved",null);
    }
}
