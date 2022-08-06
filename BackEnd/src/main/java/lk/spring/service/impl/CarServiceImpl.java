package lk.spring.service.impl;

import lk.spring.dto.CarDTO;
import lk.spring.entity.Car;
import lk.spring.repo.CarRepo;
import lk.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CarServiceImpl implements CarService {
    @Autowired
    CarRepo carRepo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void saveCar(CarDTO dto) {
        if (!carRepo.existsById(dto.getCarId())){
            carRepo.save(mapper.map(dto, Car.class));
        }else{
            throw new RuntimeException("Car Already Exists! Try Again");
        }
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (carRepo.existsById(dto.getCarId())){
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

    @Override
    public List<CarDTO> readByType(String type) {
        List<Car> all = carRepo.readByCarType(type);
        return mapper.map(all, new TypeToken<ArrayList<CarDTO>>() {
        }.getType());
    }

    @Override
    public int getCarCount() {
        return carRepo.getCarCount();
    }

}
