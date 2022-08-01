package lk.spring.service;

import lk.spring.dto.CustomerDTO;
import lk.spring.dto.DriverDTO;


import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO dto);
    void updateDriver(DriverDTO dto);
    void deleteDriver(String id);
    DriverDTO searchDriver(String id);
    DriverDTO searchRandomDriver(String id);
    List<DriverDTO> getAllDrivers();
    DriverDTO findLastDriverById();


    boolean findByUserNameAndPassword(String userName, String password);

    boolean findByUserName(String userName);

    DriverDTO getDriver(String userName);

    DriverDTO getRandomDriver();

}
