const paymentBaseUrl="http://localhost:8080/api/v1/payment";
loadAllPayments();



function loadAllPayments() {
    $('#tblOrderBody').empty();
    $.ajax({
        url: paymentBaseUrl,
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let id = values[i].paymentID;
                let date = values[i].date;
                let amount = values[i].amount;
                let bookingId = values[i].booking.bookingID;



                $('#tblPaymentBody').append(`<tr><td>${paymentID}</td><td>${date}</td><td>${amount}</td><td>${bookingId}</td></tr>`);
            }
        }
    });

}