package lk.spring.service;

import lk.spring.dto.AdminDTO;

import java.util.List;

public interface AdminRepoService {
    void saveAdmin(AdminDTO dto);
    AdminDTO searchAdmin(String id);
    void updateAdmin(AdminDTO dto);
    void deleteAdmin(String id);
    List<AdminDTO> getAllAdmin();
}
