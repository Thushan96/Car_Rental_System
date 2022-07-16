package lk.spring.service.impl;

import lk.spring.dto.AdminDTO;
import lk.spring.entity.Admin;
import lk.spring.repo.AdminRepo;
import lk.spring.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    ModelMapper mapper;

    @Autowired
    AdminRepo adminRepo;


    @Override
    public void saveAdmin(AdminDTO dto) {
        if (!adminRepo.existsById(dto.getAdminID())){
            adminRepo.save(mapper.map(dto, Admin.class));
        }else{
            throw new RuntimeException("Admin not registered! Try Again");
        }
    }

    @Override
    public AdminDTO searchAdmin(String id) {
        if (adminRepo.existsById(id)) {
            return mapper.map(adminRepo.findById(id).get(), AdminDTO.class);
        }else{
            throw new RuntimeException("No Admin found For " + id + " ..!");
        }
    }

    @Override
    public void updateAdmin(AdminDTO dto) {
        if (adminRepo.existsById(dto.getAdminID())){
            adminRepo.save(mapper.map(dto, Admin.class));
        }else{
            throw new RuntimeException("Admin Not Exist..! Please Check ID");
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(id)){
            adminRepo.deleteById(id);
        }else{
            throw new RuntimeException("Admin Not Exist..! Please Check ID");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        return mapper.map(adminRepo.findAll(), new TypeToken<List<AdminDTO>>() {
        }.getType());
    }
}
