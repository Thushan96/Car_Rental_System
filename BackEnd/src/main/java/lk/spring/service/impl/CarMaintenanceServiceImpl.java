package lk.spring.service.impl;

import lk.spring.dto.BookingDTO;
import lk.spring.dto.BookingReturnDTO;
import lk.spring.dto.MaintainceDTO;
import lk.spring.entity.BookingReturn;
import lk.spring.entity.Maintaince;
import lk.spring.repo.CarMaintenanceRepo;
import lk.spring.service.CarMaintenanceService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CarMaintenanceServiceImpl implements CarMaintenanceService {
    @Autowired
    ModelMapper mapper;

    @Autowired
    CarMaintenanceRepo carMaintenanceRepo;

    @Override
    public void saveCarMaintenance(MaintainceDTO dto) {
        if (!carMaintenanceRepo.existsById(dto.getMaintainceID())){
            carMaintenanceRepo.save(mapper.map(dto, Maintaince.class));
        }else{
            throw new RuntimeException("Maintenance Completed! Try Again");
        }
    }

    @Override
    public void deleteCarMaintenance(String id) {
        if (carMaintenanceRepo.existsById(id)){
            carMaintenanceRepo.deleteById(id);
        }else{
            throw new RuntimeException("Maintenance Not Exist..! Please Check ID");
        }
    }

    @Override
    public void updateCarMaintenance(MaintainceDTO dto) {
        if (carMaintenanceRepo.existsById(dto.getMaintainceID())){
            carMaintenanceRepo.save(mapper.map(dto, Maintaince.class));
        }else{
            throw new RuntimeException("Maintenance Not Exist..! Please Check ID");
        }
    }

    @Override
    public MaintainceDTO searchCarMaintenance(String id) {
        if (carMaintenanceRepo.existsById(id)) {
            return mapper.map(carMaintenanceRepo.findById(id).get(), MaintainceDTO.class);
        }else{
            throw new RuntimeException("No Maintenance done For " + id + " ..!");
        }
    }

    @Override
    public List<MaintainceDTO> getCarMaintenance() {
        return mapper.map(carMaintenanceRepo.findAll(), new TypeToken<List<MaintainceDTO>>() {
        }.getType());
    }
}
