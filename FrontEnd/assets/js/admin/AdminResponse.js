loadAllRBooking();

//load all req booking
function loadAllRBooking() {
    $('#bookingReqTBody').empty();

    console.log("inside booking request body");

    $.ajax({
        method: 'GET',
        url: bookingBaseUrl+"/get/pending",
        dataType: 'json',
        async: false,
        success: function (resp) {
            let response = resp.data;
            for (let i=0;i<response.length;i++) {
                let bookingID = (response[i].bookingID);
                let orddate = (response[i].date);
                let customerID = response[i].customer.customerID;
                let carID = response[i].car.carId;
                let pickupDate = response[i].pickupDate;
                let returnDate = response[i].returnDate
                let driverID = response[i].driver;
                let d = driverID;
                let status = response[i].status;
                if (driverID === undefined || driverID==null || driverID==false) {
                    console.log("underfined");
                    d = "No Driver";
                }else {
                    d=response[i].driver.driverID;

                }





                let row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td>
                            <td><button type="button" class="btn btn-success rounded-pill btn-sm px-3" id="accept"><i class="far fa-check-circle fa-2x"></i></button>
                                </td><td><button type="button" class="btn btn-danger rounded-pill btn-sm px-3"" id="reject"><i class="fas fa-trash-alt fa-2x"></i></button></td></tr>`;
                console.log(row);
                $('#bookingReqTBody').append(row);


            }

                $('#bookingReqTBody').on('click', "#accept", function () {
                    let closest = $(this).closest('tr');

                    console.log("in accept")

                    let bookingId = closest.find('td:eq(0)').text();
                    let ordDate = closest.find('td:eq(1)').text();
                    let cid = closest.find('td:eq(2)').text();
                    let carid = closest.find('td:eq(3)').text();
                    let pickupdate = closest.find('td:eq(4)').text();
                    let returnDate = closest.find('td:eq(5)').text();
                    let driverId = closest.find('td:eq(6)').text();
                    let status = "Accept";
                    updateBooking(bookingId, ordDate, cid, carid, pickupdate, returnDate, driverId, status);

                });

                $('#bookingReqTBody').on('click', "#reject", function () {
                    let closest = $(this).closest('tr');

                    let bookingId = closest.find('td:eq(0)').text();
                    let ordDate = closest.find('td:eq(1)').text();
                    let cid = closest.find('td:eq(2)').text();
                    let carid = closest.find('td:eq(3)').text();
                    let pickupdate = closest.find('td:eq(4)').text();
                    let returnDate = closest.find('td:eq(5)').text();
                    let driverId = closest.find('td:eq(6)').text();
                    let status = "Reject";
                    updateBooking(bookingId, ordDate, cid, carid, pickupdate, returnDate, driverId, status);
                });

        }
    });
}

function updateBooking(bookingId, ordDate, cid, carid, pickupdate, returnDate, driverId, status) {
    console.log("bookingId " + bookingId + " " + cid + " " + driverId + " " + carid);


    let car = null;
    let driver = null;
    let customer = null;
    $.ajax({
        method: "GET",
        url: carBaseUrl +"/"+ carid,
        async: false,
        dataType: 'json',
        success: function (response) {
            car = response.data;
            console.log("car " + car);
            if (status == "Accept") {
                updateCarAjax(car);
            }
        }
    });
    $.ajax({
        method: "GET",
        url: customerBaseUrl +"/"+ cid,
        async: false,
        dataType: 'json',
        success: function (response) {
            customer = response.data;
            console.log("cust " + customer);

        }
    });

    if (driverId =="No Driver" ) {

        driver=null;

    } else {
        $.ajax({
            method: "GET",
            url: driverBaseUrl +"/"+ driverId,
            async: false,
            dataType: 'json',
            success: function (response) {
                driver = response.data;

            }
        });
    }

    $.ajax({
        method: "PUT",
        url: bookingBaseUrl,
        contentType: "application/json",
        async: false,
        data: JSON.stringify(
            {
                bookingID: bookingId,
                date: ordDate,
                pickupDate: pickupdate,
                returnDate: returnDate,
                status: status,
                customer: customer,
                car: car,
                driver: driver
            }
        ),
        success: function (data) {
            loadAllRBooking();
            // Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Upadeted !',
            //     showConfirmButton: false,
            //     timer: 1500
            // })

            alert('Response Sent');
            // clearDriverTextFields();

        }
    });
}

function updateCarAjax(car) {
    $.ajax({
        method: "PUT",
        url: carBaseUrl,
        contentType: "application/json",
        async: false,
        data: JSON.stringify(
            {
                carId: car.carId,
                carBrand: car.carBrand,
                carType: car.carType,
                carFreeMillageDuration:car.carFreeMillageDuration,
                carFreeMillagePrice:car.carFreeMillagePrice,
                carNmbOfPassengers: car.carNmbOfPassengers,
                carTransmissionType: car.carTransmissionType,
                carFuelType: car.carFuelType,
                carColour: car.carColour,
                carDailyRate: car.carDailyRate,
                carMonthlyRate: car.carMonthlyRate,
                freeKmforMonth: car.freeKmforMonth,
                freeKmforDay: car.freeKmforDay,
                carLossDamageWaiver: car.lossDamageWaiver,
                carPriceForExtraKM: car.priceForExtraKM,
                carRegistrationNumber:car.carRegistrationNumber
            }
        ),
        success: function (data) {
            loadAllCars();

            // clearCarTextFields();
        }
    });

}

function updateDriverAjax(driver) {
    $.ajax({
        method: "PUT",
        url: driverBaseUrl,
        contentType: "application/json",
        async: true,
        data: JSON.stringify(
            {
                driverID: driver.driverID,
                name: driver.name,
                contactNo: driver.contactNo,
                nic: driver.nic,
                userName: driver.userName,
                password: driver.password,
                available: false
            }
        ),
        success: function (data) {
            // loadAllDrivers();
            // clearDriverTextFields();
            return true;
        }
    });
}
