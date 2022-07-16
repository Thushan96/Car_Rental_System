package lk.spring.repo;

import lk.spring.entity.Maintaince;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarMaintenanceRepo extends JpaRepository<Maintaince,String> {
}
