package lk.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminDTO {
    private String adminID;
    private String email;
    private String userName;
    private String password;
}
