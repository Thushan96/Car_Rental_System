package lk.spring.service.impl;

import lk.spring.dto.CarDTO;
import lk.spring.dto.CustomerDTO;
import lk.spring.entity.Car;
import lk.spring.entity.Customer;
import lk.spring.repo.CarRepo;
import lk.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CarServiceImpl implements CarService {
    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (!carRepo.existsById(dto.getCarID())){
            carRepo.save(mapper.map(dto, Car.class));
        }else{
            throw new RuntimeException("Car Already Exists! Try Again");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (carRepo.existsById(dto.getCarID())){
            carRepo.save(mapper.map(dto,Car.class));
        }else{
            throw new RuntimeException("Car Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteCar(String id) {
        if (carRepo.existsById(id)){
            carRepo.deleteById(id);
        }else{
            throw new RuntimeException("Car Not Exist..! Please Check ID");
        }
    }

    @Override
    public CarDTO searchCar(String id) {
        if (carRepo.existsById(id)) {
            return mapper.map(carRepo.findById(id).get(), CarDTO.class);
        }else{
            throw new RuntimeException("No Car For " + id + " ..!");
        }
    }

    @Override
    public List<CarDTO> getAllCars() {
        return mapper.map(carRepo.findAll(), new TypeToken<List<CarDTO>>() {
        }.getType());
    }
}
