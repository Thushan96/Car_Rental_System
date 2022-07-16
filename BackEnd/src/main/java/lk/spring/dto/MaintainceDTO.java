package lk.spring.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class MaintainceDTO {
    private String maintainceID;
    private String date;
    private String details;
    private CarDTO car;

}
