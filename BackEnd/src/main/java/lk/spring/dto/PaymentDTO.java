package lk.spring.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class PaymentDTO {
    private String paymentID;
    private String date;
    private double amount;
    private String description;
    private BookingDTO booking;
}
