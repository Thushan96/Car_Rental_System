const bookingBaseUrl="http://localhost:8080/api/v1/booking";
loadAllOrders();



$('#btnOrdersRefresh').click(function () {
    loadAllOrders();
});

function loadAllOrders() {
    $('#tblOrderBody').empty();
    $.ajax({
        url: bookingBaseUrl,
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].bookingId;
                let date = values[i].date;
                let note = values[i].bookingNote;
                let pickdate = values[i].pickupDate;
                let returndate = values[i].returnDate;
                let status = values[i].status;
                let car = values[i].car.carId;
                let customer = values[i].customer.customerID;
                let driver ;
                if (values[i].driver.driverID == null || values[i].driver.driverID== false ||values[i].driver.driverID==undefined) {
                    driver = "No Need Driver";
                }else {
                   driver= values[i].driver.driverID;
                }


                $('#tblOrderBody').append(`<tr><td>${id}</td><td>${car}</td><td>${customer}</td><td>${driver}</td><td>${date}</td><td>
                    ${note}</td><td>${pickdate}</td><td>${returndate}</td><td>${status}</td></tr>`)
            }
        }
    });

}