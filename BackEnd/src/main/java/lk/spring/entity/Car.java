package lk.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Car {
    @Id
    private String carId;
    private String carBrand;
    private String carType;
    private int carNmbOfPassengers;
    private String carTransmissionType;
    private String carFuelType;
    private double carPriceForExtraKM;
    private String carRegistrationNumber;
    private String carColour;
    private double carDailyRate;
    private double carMonthlyRate;
    private double carLossDamageWaiver;
    private double carFreeMillagePrice;
    private String carFreeMillageDuration;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<Booking>();

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Maintaince> maintenance = new ArrayList<>();
}
