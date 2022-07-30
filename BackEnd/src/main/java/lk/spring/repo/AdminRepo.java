package lk.spring.repo;

import lk.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepo extends JpaRepository<Admin,String> {

    Optional<Admin> findByUserName(String userName);

    Optional<Admin> findByUserNameAndPassword(String userName,String password);
}
