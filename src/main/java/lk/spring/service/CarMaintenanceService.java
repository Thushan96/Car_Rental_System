package lk.spring.service;

import lk.spring.dto.MaintainceDTO;

import java.util.List;

public interface CarMaintenanceService {
    void saveCarMaintenance(MaintainceDTO dto);
    void deleteCarMaintenance(String id);
    void updateCarMaintenance(MaintainceDTO dto);
    MaintainceDTO searchCarMaintenance(String id);
    List<MaintainceDTO> getCarMaintenance();
}
