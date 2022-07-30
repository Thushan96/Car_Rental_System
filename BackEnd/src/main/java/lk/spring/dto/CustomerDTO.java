package lk.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CustomerDTO {
    private String customerID;
    private String name;
    private String contact;
    private String address;
    private String email;
    private String nicNo;
    private String drivingLicenceNo;
    private String userName;
    private String password;
}
