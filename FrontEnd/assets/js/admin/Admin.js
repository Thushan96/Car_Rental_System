    getCustomerCount();
    getCarCount();
    getOrderCount();
    getDriverCount();








//get count customer
function getCustomerCount() {
    $.ajax({
        method: "GET",
        url: customerBaseUrl+"/custCount",
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#TxtCustomerCount').text(resp);
        }

    });
}

function getCarCount() {
    $.ajax({
        method: "GET",
        url: carBaseUrl+'/carCount',
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#txtCarCount').text(resp);
        }

    });
}
function getOrderCount() {
    $.ajax({
        method: "GET",
        url: bookingBaseUrl+'/bookingCount',
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#txtOrderCount').text(resp);
        }

    });
}
function getDriverCount() {
    $.ajax({
        method: "GET",
        url: driverBaseUrl+'/driverCount',
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#txtDriverCount').text(resp);
        }

    });
}

