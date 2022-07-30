package lk.spring.service;

import lk.spring.dto.LoginDTO;

import java.util.List;

public interface LoginService {
    void saveLogin(LoginDTO dto);
    void updateLogin(LoginDTO dto);
    void deleteLogin(String id);
    LoginDTO searchLogin(String id);
    List<LoginDTO> getAllLogins();

    String getLastID();

    String genarateLogID();
}
