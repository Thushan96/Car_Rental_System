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
import java.util.Objects;
import java.util.Optional;
import java.util.Random;

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
    public DriverDTO getDriver(String userName) {
        Driver driver = driverRepo.getDriver(userName);
        return mapper.map(driver, DriverDTO.class);
    }

    @Override
    public DriverDTO searchRandomDriver(String id) {
        Optional<Driver> driver = driverRepo.findById(id);
        if (driver.isPresent()) {
            return mapper.map(driver, DriverDTO.class);
        }
            return null;

    }

    @Override
    public DriverDTO getRandomDriver() {

        Random random = new Random();
        int i = random.nextInt(10) + 1;
        System.out.println(i + " Random i");
//        System.out.println( driverDTOS.get(i)+" Random dri");
//        return driverDTOS.get(i);
        DriverDTO dto = searchRandomDriver("D" + i);
        System.out.println("DTO " + dto);
        while (true) {
            if (dto == null || dto.isAvailable() == true) {
                i = random.nextInt(10);
                dto = searchRandomDriver("D" + i);
                System.out.println("if in ");

            }else {
                return dto;}
        }
    }



    @Override
    public boolean findByUserNameAndPassword(String userName, String password) {
        Optional<Driver> byUserNameAndPassword = driverRepo.findByUserNameAndPassword(userName, password);
        return byUserNameAndPassword.isPresent();
    }

}
