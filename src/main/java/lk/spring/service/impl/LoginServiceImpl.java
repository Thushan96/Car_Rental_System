package lk.spring.service.impl;

import lk.spring.dto.DriverDTO;
import lk.spring.dto.LoginDTO;
import lk.spring.entity.Driver;
import lk.spring.entity.Login;
import lk.spring.repo.LoginRepo;
import lk.spring.service.LoginService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LoginServiceImpl implements LoginService {

    @Autowired
    ModelMapper mapper;

    @Autowired
    LoginRepo loginRepo;


    @Override
    public void saveLogin(LoginDTO dto) {
        if (!loginRepo.existsById(dto.getLoginID())){
            loginRepo.save(mapper.map(dto, Login.class));
        }else{
            throw new RuntimeException("User Already logged! Try Again");
        }
    }

    @Override
    public void updateLogin(LoginDTO dto) {
        if (loginRepo.existsById(dto.getLoginID())){
            loginRepo.save(mapper.map(dto,Login.class));
        }else{
            throw new RuntimeException("User Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteLogin(String id) {
        if (loginRepo.existsById(id)){
            loginRepo.deleteById(id);
        }else{
            throw new RuntimeException("User Not Exist..! Please Check ID");
        }
    }

    @Override
    public LoginDTO searchLogin(String id) {
        if (loginRepo.existsById(id)) {
            return mapper.map(loginRepo.findById(id).get(), LoginDTO.class);
        }else{
            throw new RuntimeException("No User For " + id + " ..!");
        }
    }

    @Override
    public List<LoginDTO> getAllLogins() {
        return mapper.map(loginRepo.findAll(),new TypeToken<List<LoginDTO>>(){}.getType());
    }
}
