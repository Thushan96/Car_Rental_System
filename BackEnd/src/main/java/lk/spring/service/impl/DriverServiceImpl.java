package lk.spring.service.impl;


import lk.spring.dto.DriverDTO;
import lk.spring.entity.Driver;
import lk.spring.repo.DriverRepo;
import lk.spring.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    ModelMapper mapper;

    @Autowired
    DriverRepo driverRepo;

    @Override
    public void saveDriver(DriverDTO dto) {
        if (!driverRepo.existsById(dto.getDriverID())){
            driverRepo.save(mapper.map(dto, Driver.class));
        }else{
            throw new RuntimeException("Driver Already Exists! Try Again");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getDriverID())){
            driverRepo.save(mapper.map(dto,Driver.class));
        }else{
            throw new RuntimeException("Driver Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (driverRepo.existsById(id)){
            driverRepo.deleteById(id);
        }else{
            throw new RuntimeException("Driver Not Exist..! Please Check ID");
        }
    }

    @Override
    public DriverDTO searchDriver(String id) {
        if (driverRepo.existsById(id)) {
            return mapper.map(driverRepo.findById(id).get(), DriverDTO.class);
        }else{
            throw new RuntimeException("No Driver For " + id + " ..!");
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        return mapper.map(driverRepo.findAll(), new TypeToken<List<DriverDTO>>() {
        }.getType());
    }

    @Override
    public DriverDTO findLastDriverById() {
        if (driverRepo.findTopByOrderByDriverIDDesc()==null){
            return null;
        }else{
            return mapper.map(driverRepo.findTopByOrderByDriverIDDesc(),DriverDTO.class);
        }
    }
    @Override
    public boolean findByUserName(String userName) {
        Optional<Driver> byUserName = driverRepo.findByUserName(userName);
        return byUserName.isPresent();
    }

    @Override
    public boolean findByUserNameAndPassword(String userName, String password) {
        Optional<Driver> byUserNameAndPassword = driverRepo.findByUserNameAndPassword(userName, password);
        return byUserNameAndPassword.isPresent();
    }

}
