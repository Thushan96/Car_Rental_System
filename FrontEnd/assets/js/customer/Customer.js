const loginBaseurl="http://localhost:8080/api/v1/login";
const customerBaseUrl="http://localhost:8080/api/v1/customer";
const carBaseUrl="http://localhost:8080/api/v1/car";
const driverBaseUrl="http://localhost:8080/api/v1/driver";
const bookingBaseurl="http://localhost:8080/api/v1/booking";
const paymentBaseurl="http://localhost:8080/api/v1/payment";

window.onload = (event) => {
    getLastLoginData();
    loadAllCRBooking();
    loadAllCars();
};


function getLastLoginData() {
    $.ajax({
        method: "GET",
        url: loginBaseurl+'/lastLogUser',
        async: false,
        success: function (response) {
            let userName = response.data;
            console.log("userName login " + userName);
            getAllCustomerData(userName);
        }
    });
}

function getAllCustomerData(userName) {
    let customer;
    $.ajax({
        method: "GET",
        url: customerBaseUrl+ '/get/' + userName,
        async: false,
        success: function (response) {
            let data = response.data;
            $('#custId').val(data.customerID);
            $('#custName').val(data.name);
            $('#custContact').val(data.contact);
            $('#custEmail').val(data.email);
            $('#custAddress').val(data.address);
            $('#custDl').val(data.drivingLicenceNo);
            $('#custNic').val(data.nicNo);
            $('#custUserName').val(data.userName);
            $('#custPassword').val(data.password);


        }
    });

}



//Start Customer Validation Section
function checkValidationCustomerProfile() {

    let cId = $('#custId').val();
    let cName = $('#custName').val();
    let cAdd = $('#custAddress').val();
    let cEmail = $('#custEmail').val();
    let cNic = $('#custNic').val();
    let cDl = $('#custDl').val();
    let cContact = $('#custContact').val();
    let cPassword = $('#custPassword').val();
    let cUserName = $('#custUserName').val();

    if (cId != "") {
        if (cName != "") {
            if (cAdd != "") {
                if (cEmail != "") {
                    if (cNic != "") {
                        if (cDl != "") {
                            if (cContact != "") {
                                if (cUserName !="") {
                                    if (cPassword) {
                                        return true;
                                    } else {
                                        $('#custPassword').css({
                                            'border': '2px #FF0000FF solid'
                                        });
                                        $('#custPassword').focus();
                                        alert("Please Enter Password");
                                        return false;
                                    }
                                }else {
                                    $('#custUserName').css({
                                        'border': '2px #FF0000FF solid'
                                    });
                                    $('#custUserName').focus();
                                    alert("Please Enter Driver License");
                                    return false;
                                }
                            } else {
                                $('#custContact').css({
                                    'border': '2px #FF0000FF solid'
                                });
                                $('#custContact').focus();
                                alert("Please Enter Contact");
                                return false;
                            }
                        } else {
                            $('#custDl').css({
                                'border': '2px #FF0000FF solid'
                            });
                            $('#custDl').focus();
                            alert("Please Enter Driver License");
                            return false;
                        }
                    } else {
                        $('#custNic').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#custNic').focus();
                        alert("Please Enter Nic");
                        return false;
                    }
                } else {
                    $('#custEmail').css({
                        'border': '2px #FF0000FF solid'
                    });
                    $('#custEmail').focus();
                    alert("Please Enter Email");
                    return false;
                }
            } else {
                $('#custAddress').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#custAddress').focus();
                alert("Please Enter Address");
                return false;
            }
        } else {
            $('#custName').css({
                'border': '2px #FF0000FF solid'
            });
            $('#custName').focus();
            alert("Please Enter Name");
            return false;
        }
    } else {
        $('#custId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#custId').focus();
        alert("Please Enter Id");
        return false;
    }
}

//End Customer Validation Section

//Start Customer Save Section
$('#btnCustomerUpdate').click(() => {

    if (checkValidationCustomerProfile()) {
        let cId = $('#custId').val();
        let cName = $('#custName').val();
        let cAdd = $('#custAddress').val();
        let cEmail = $('#custEmail').val();
        let cNic = $('#custNic').val();
        let cDl = $('#custDl').val();
        let cContact = $('#custContact').val();
        let cPassword = $('#custPassword').val();
        let cUserName = $('#custUserName').val();

        $.ajax({
            method: "PUT",
            url: customerBaseUrl,
            data: JSON.stringify({
                "customerID": cId,
                "name": cName,
                "address": cAdd,
                "email": cEmail,
                "nicNo": cNic,
                "drivingLicenceNo": cDl,
                "contact": cContact,
                "password": cPassword,
                "userName": cUserName
            }),
            dataType: 'Json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                if (res.code == 200) {
                    alert("Profile Successfully Updated");
                    getLastLoginData();
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    }
});
//End Customer Save Section

//Start Customer get all car Section
$('#btnCarsRefresh').click(function () {
    loadAllCars();
});


function loadAllCars() {
    $('#tblCustCar').empty();
    $.ajax({
        url: carBaseUrl,
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let adminCarId = values[i].carId;
                let adminCarBrand = values[i].carBrand;
                let adminCarPass = values[i].carNmbOfPassengers;
                let adminCarTran = values[i].carTransmissionType;
                let adminCarType = values[i].carType;
                let adminCarColor = values[i].carColour;
                let adminCarFuel = values[i].carFuelType;

                $('#tblCustCar').append(`<tr><td>${adminCarId}</td><td>${adminCarBrand}</td><td>${adminCarPass}</td><td>${adminCarTran}</td><td>${adminCarType}</td><td>${adminCarColor}</td><td>${adminCarFuel}</td></tr>`)
                $('#tblOrderBody').append(`<tr><td>${adminCarId}</td><td>${adminCarBrand}</td><td>${adminCarPass}</td><td>${adminCarTran}</td><td>${adminCarType}</td><td>${adminCarColor}</td><td>${adminCarFuel}</td></tr>`)
            }
        }
    });
}



function clearOrderPage(){
    $('#driver').val("");
    $('#pickUpDate').val("");
    $('#returnDate').val("");
    $('#carType').val("");
    $('#carid').val("");

}

////////////////customer place order------------
function getSelectedCType() {
    let type = ($('#carType option:selected').text());
    console.log(type);
    if (type != "- Car Type -") {
        $('#type').css('border', '3px solid green').focus();
        return type;

    } else {
        $('#type').css('border', '3px solid red').focus();
        return null;

    }
}


$('#carType').click(function () {

    let type = getSelectedCType();
    if (type != null ) {
        getCarList(type);

    } else {
        $('#carType').css('border', '3px solid red').focus();
    }
});

function getCarList(type) {
    $.ajax({
        method: "GET",
        url: carBaseUrl+'/get/' + type ,
        async: false,
        success: function (response) {
            let data = response.data;
            loadAllCarID(data);

        }
    });
}

//load all car id in type
function loadAllCarID(data) {
    $('#carId').empty();
    $('#carId').append(`<option value=0 id="option">- Car ID -</option>`);

    for (let i in data) {
        let id = data[i].carId;

        console.log(id);
        var option = `<option value=${i} id="option">${id}</option>`;
        $('#carId').append(option);
    }
}



function setRandomDriver(){
    $.ajax({
        method: "GET",
        url: driverBaseUrl+'/get/list/randomDriver',
        async: false,
        dataType: 'json',
        success: function (response) {
            let driver=response.data;
            console.log(driver);
            var option = `<option value=${response.data.driverID} id="option">${response.data.name}</option>`;
            $('#driver').append(option);

        },
    });
}


setRandomDriver();
setBookingId();

function setBookingId(){
    $.ajax({
        method: "GET",
        url: bookingBaseurl+'/bookingId',
        async: false,
        dataType: 'json',
        success: function (response) {
            $('#custBookingID').val(response.data);
        },
    });
}

let today;

getCurrentDate();

function getCurrentDate() {

    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + '/' + dd + '/' + yyyy);
}





//check pickup date
function checkingPickupDate() {
    let val = $('#pickupDate').val();
    if (val != "" && new Date(today) <= new Date(val)) {
        $('#pickupDate').css('border', '3px solid green').focus();
        return val;
    } else {
        $('#pickupDate').css('border', '3px solid red').focus();
        return null;
    }

}


//check pickup date
function checkingReturnDate() {
    let pick = $('#pickupDate').val();
    let rtn = $('#returnDate').val();
    if (rtn != "" && new Date(today) <= new Date(rtn) && new Date(pick) <= new Date(rtn)) {
        $('#returnDate').css('border', '3px solid green').focus();
        return rtn;
    } else {
        $('#returnDate').css('border', '3px solid red').focus();
        return null;
    }

}

function checkSelectedCarId() {
    let cid = ($('#carId option:selected').text());
    if (cid != "Car Id") {
        $('#carId').css('border', '3px solid green').focus();
        return cid;
    } else {
        $('#carId').css('border', '3px solid red').focus();
        return null;

    }
}

function checkSelectedDriverId() {
    let Did = ($('#driver option:selected').val());
    if (Did != -1) {
        $('#driver').css('border', '3px solid green').focus();
        return Did;
    } else {
        $('#driver').css('border', '3px solid red').focus();
        return null;

    }
}


$('#pickupDate').on('change', function () {
    checkingPickupDate();
});

$('#returnDate').on('change', function () {
    checkingReturnDate();
});

$('#driver').on('change', function () {
    checkSelectedDriverId();
});

$('#carId').on('change', function () {
    checkSelectedCarId();
});


$('#btnBooking').click(function () {
    let custID = $('#custId').val();
    let bookingID = $('#custBookingID').val();

    let pickupDate = checkingPickupDate();
    let returnDate = checkingReturnDate();
    let cType = getSelectedCType();
    let carId = checkSelectedCarId();
    let driverId = checkSelectedDriverId();

    console.log(custID ,bookingID,pickupDate,returnDate,cType,carId,driverId,today);

    let car;
    let objDriver = null;
    let customer;

    if (cType != null) {
        if (carId != null) {
            if (pickupDate != null) {
                if (returnDate != null) {


                    $.ajax({
                        method: "GET",
                        url: carBaseUrl + "/" +carId,
                        async: false,
                        dataType: 'json',
                        success: function (response) {
                            car = response.data;
                        }
                    });
                    $.ajax({
                        method: "GET",
                        url: customerBaseUrl +"/" +custID,
                        async: false,
                        dataType: 'json',
                        success: function (response) {
                            customer = response.data;
                        }
                    });

                    if (driverId!=-1) {
                        console.log(driverId);
                        $.ajax({
                            method: "GET",
                            url: driverBaseUrl+ "/" +driverId,
                            async: false,
                            dataType: 'json',
                            success: function (response) {
                                objDriver = response.data;
                            }
                        });
                    }else {
                        objDriver="No Driver";
                    }

                    console.log("bookingId"+bookingID+ "driver " + driver + " car " + car + " cust " + customer);
                    $.ajax({
                        method: "POST",
                        url: bookingBaseurl,
                        contentType: "application/json",
                        async: false,
                        data: JSON.stringify(
                            {
                                bookingID: bookingID,
                                date: today,
                                pickupDate: pickupDate,
                                returnDate: returnDate,
                                status: "pending",
                                customer: customer,
                                car: car,
                                driver: objDriver
                            }
                        ),
                        success: function (response) {
                            let data = response.data;
                            // let bid = $('#cbookingID').val(data.bookingID);
                            // getBookingUpdateResp(bid);
                            // loadAllCRBooking();
                            // loadOrdersByCustomer();
                            clearBookingfeids();
                            setBookingId();
                            alert("Car booking request Successful");
                            loadAllCRBooking();

                        },
                        error: function (ob) {
                            alert(ob.responseJSON.message);

                        }
                    });


                } else {
                    $('#returnDate').css('border', '3px solid red').focus();
                }
            } else {
                $('#pickupDate').css('border', '3px solid red').focus();
            }
        } else {
            $('#carId').css('border', '3px solid red').focus();

        }
    } else {
        $('#carType').css('border', '3px solid red').focus();

    }
});

function clearBookingfeids(){
    $('#driver').val(-1);
    $('#returnDate').val(today);
    $('#pickupDate').val(today);
    $('#carId').val(-1);
    $('#carType').val(-1);
}

loadPaymentDetails($('#custId').val());

function loadPaymentDetails(id){
    $.ajax({
        method: "GET",
        url: paymentBaseurl+ "/get/" +id,
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            console.log(values);
            for (i in values) {
                let paymentID = values[i].paymentID;
                let date = values[i].date;
                let bookingID = values[i].bookingID;
                let amount = values[i].amount;


                $('#tblPayBody').append(`<tr><td>${paymentID}</td><td>${date}</td><td>${bookingID}</td><td>${amount}</td></tr>`)
            }
        }
    });
}


/////////////Booking Status------------
let totalAmount=null;
function loadAllCRBooking() {

    let custId = $('#custId').val();
    console.log(custId);

    $('#cbookingTBody').empty();

    $.ajax({
        method: 'GET',
        url: bookingBaseurl+"/get/adminResp/"  + custId,
        dataType: 'json',
        async: false,
        success: function (resp) {
            let response = resp.data;
            console.log(response);
            for (var i in response) {
                let bookingID = (response[i].bookingID);
                let orddate = (response[i].date);
                let customerID = response[i].customer.customerID;
                let carID = response[i].car.carId;
                let pickupDate = response[i].pickupDate;
                let returnDate = response[i].returnDate
                let d ;
                let status = response[i].status;
                if (response[i].driver==false || response[i].driver==null || response[i].driver==undefined ) {
                    d = "No Need Driver";
                }else{
                    d=response[i].driver.driverID;
                }

                var row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;
                $('#cbookingTBody').append(row);

                $('#cbookingTBody tr').css({"cursor": "pointer"});
                $('#cbookingTBody tr').click(function () {

                    let bookingId = $(this).children('td:eq(0)').text();
                    let ord = $(this).children('td:eq(1)').text();
                    let custid = $(this).children('td:eq(2)').text();
                    let carid = $(this).children('td:eq(3)').text();
                    let pickup = $(this).children('td:eq(4)').text();
                    let rtndate = $(this).children('td:eq(5)').text();
                    let drvid = $(this).children('td:eq(6)').text();
                    let status = $(this).children('td:eq(7)').text();

                    $('#cbookingID').val(bookingId);
                    $('#hiddnCar').val(carid);
                    $('#hiddnCust').val(custid);
                    $('#hiddnDriver').val(drvid);
                    $('#hiddnord').val(ord);
                    $('#hiddnpick').val(pickup);
                    $('#hiddnReturn').val(rtndate);




                    if (status == "Accept") {

                        let carDailyRate=getCarDailyRate(carid);
                        let carMonthlyRate=getCarMonthlyRate(carid);

                        $("#btnRent").attr("disabled", false);

                        let pYear=parseInt(pickup.split("-")[0]);
                        let pMonth=parseInt(pickup.split("-")[1]);
                        let pDay=parseInt(pickup.split("-")[2]);

                        let rYear=parseInt(rtndate.split("-")[0]);
                        let rMonth=parseInt(rtndate.split("-")[1]);
                        let rDay=parseInt(rtndate.split("-")[2]);

                        if (pYear==rYear){
                            console.log("year");
                            if (rMonth==pMonth){
                                console.log("month");
                                if (rDay==pDay){
                                    console.log("day");
                                    totalAmount+=carDailyRate;
                                }else {
                                    console.log("day differ");
                                    totalAmount+=carDailyRate*(rDay-pDay);
                                }
                            }else if (rMonth>pMonth){
                                console.log("month differ");
                                totalAmount+=carMonthlyRate*(rMonth-pMonth);
                            }else {
                                console.log("year differ");
                                totalAmount+=0;
                            }
                        }else {
                            console.log("invalid date");
                            totalAmount+=0;
                            alert("This order has date range is invalid");
                        }

                        console.log(totalAmount);
                        $('#grossTotalPlaceOrder').text("Rs."+totalAmount+".00");


                        // setLoosDmg();
                        // if (drvid == "") {
                        //     // $('#msg').click(function () {
                        //     //     let dname;
                        //     //     let dcontact;
                        //     //     $("#btnRent").attr("disabled", true);
                        //     //     $.ajax({
                        //     //         method: "get",
                        //     //         url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/' + did,
                        //     //         async: false,
                        //     //         dataType: 'json',
                        //     //         success: function (response) {
                        //     //             var data = response.data;
                        //     //             dname = data.name;
                        //     //             dcontact = data.contactNo;
                        //     //             let text = ("------------Your Reqeust Accepted!------------\n * Your Driver Name - " + dname + "\n* Driver Contact - " + dcontact + "Please Deposite paymnet for.........>Acc no : 152-3-999-3-025466 , Bank- People's Bank-Matara , Acc: Holder : A.G. Pethum Nuwanga");
                        //     //             if ($('.popover').hasClass('in')) {
                        //     //                 $('#msg').popover('hide');
                        //     //             } else {
                        //     //                 $('#msg').attr('data-mdb-content', text);
                        //     //                 $('#msg').popover('show');
                        //     //             }
                        //     //         }
                        //     //     });
                        //     //
                        //     // });
                        // } else {
                        //     // let text = ("...............Your Reqeust Accepted!.................\n Please Deposite paymnet for.........>Acc no : 152-3-999-3-025466 , Bank- People's Bank-Matara , Acc: Holder : A.G. Pethum Nuwanga. Enjoy tour!");
                        //     // $('#msg').click(function () {
                        //     //
                        //     //     if ($('.popover').hasClass('in')) {
                        //     //         $('#msg').popover('hide');
                        //     //     } else {
                        //     //         $('#msg').attr('data-mdb-content', text);
                        //     //         $('#msg').popover('show');
                        //     //     }
                        //     // });
                        // }
                    } else if (status == "Reject") {
                        // $("#btnRent").attr("disabled", true);
                        //
                        // let text = ("................Request Denied !..................\nThank you for your order.\n Please try again for booking .");
                        // $('#msg').click(function () {
                        //
                        //     if ($('.popover').hasClass('in')) {
                        //         $('#msg').popover('hide');
                        //     } else {
                        //         $('#msg').attr('data-mdb-content', text);
                        //         $('#msg').popover('show');
                        //     }
                        // });

                    } else {
                    }

                });


            }
        }
    });
}

function getCarDailyRate(id){
    let rate=null;
    $.ajax({
        method: "GET",
        url: carBaseUrl +"/"+ id,
        async: false,
        dataType: 'json',
        success: function (response) {
            rate=response.data.carDailyRate;
        }
    });
    return rate;

}

function getCarMonthlyRate(id){
    let rate=null;
    $.ajax({
        method: "GET",
        url: carBaseUrl +"/"+ id,
        async: false,
        dataType: 'json',
        success: function (response) {
            rate=response.data.carMonthlyRate;
        }
    });
    return rate;

}

//Delete Order------
$('#btnDeleteOrder').click(function () {


    let bookingId = $('#cbookingID').val();
    let carid = $('#hiddnCar').val();
    let cid = $('#hiddnCust').val();
    let driverId = $('#hiddnDriver').val();
    let ordDate = $('#hiddnord').val();
    let pickupdate = $('#hiddnpick').val();
    let returnDate = $('#hiddnReturn').val();

    console.log(bookingId,carid,cid,driverId,ordDate,pickupdate,returnDate);

    let car;
    let driver;
    let customer;

            $.ajax({
                method: "GET",
                url: carBaseUrl +"/"+ carid,
                async: false,
                dataType: 'json',
                success: function (response) {
                    car = response.data;
                    console.log("car " + car);
                    updateCarinAjax(car);
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

            if (driverId == "") {
                $.ajax({
                    method: "GET",
                    url: driverBaseUrl +"/"+ driverId,
                    async: false,
                    dataType: 'json',
                    success: function (response) {
                        driver = response.data;
                        console.log("driver " + driver);

                        updateDriAjax(driver);
                    }
                });

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
                url: bookingBaseurl,
                contentType: "application/json",
                async: false,
                data: JSON.stringify(
                    {
                        bookingID: bookingId,
                        date: ordDate,
                        pickupDate: pickupdate,
                        returnDate: returnDate,
                        status: "Cancel",
                        customer: customer,
                        car: car,
                        driver: driver
                    }
                ),
                success: function (data) {
                    loadAllCRBooking();
                    // Swal.fire({
                    //     position: 'top-end',
                    //     icon: 'success',
                    //     title: 'Upadeted !',
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })

                    alert("Booking Canceled");
                }
            });


    });


function updateCarinAjax(car) {
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
        }
    });

}


function updateDriAjax(driver) {
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
                available: true
            }
        ),
        success: function (data) {
            return true;
        }
    });
}


//////////////payments
let paymentId;


loadPaymentId();


function loadPaymentId(){
    $.ajax({
        method: "GET",
        url: paymentBaseurl+'/paymentId',
        async: false,
        dataType: 'json',
        success: function (response) {
            paymentId=response.data;
        },
    });
}



//payment
$('#btnRent').click(function () {


    let bookingId = $('#cbookingID').val();
    let total =parseInt($('#grossTotalPlaceOrder').val().split(".")[1]);
    let pick = $('#hiddnpick').val();
    let rtndate = $('#hiddnReturn').val();
    let carid = $('#hiddnCar').val();
    let cid = $('#hiddnCust').val();







    var b = null;

    let car;
    let driver;
    let customer;

    console.log(bookingId);

    $.ajax({
        method: "GET",
        url: bookingBaseurl + "/" + bookingId,
        async: false,
        dataType: 'json',
        success: function (response) {
            b = response.data;

        }
    });
    $.ajax({
        method: "GET",
        url: carBaseUrl +"/"+ carid,
        async: false,
        dataType: 'json',
        success: function (response) {
            car = response.data;
            console.log("car " + car);
        }
    });
    $.ajax({
        method: "GET",
        url: customerBaseUrl +"/"+ cid,
        async: false,
        dataType: 'json',
        success: function (response) {
            customer = response.data;
            console.log("car " + car);
        }
    });

                            $.ajax({
                                method: "POST",
                                url: paymentBaseurl,
                                async: false,
                                contentType: "application/json",
                                data: JSON.stringify(
                                    {
                                        paymentID: paymentId,
                                        date: today,
                                        amount: totalAmount,
                                        description: "fully payed",
                                        booking:b
                                    }
                                ),
                                success: function (response) {
                                    let pid = paymentId;

                                    $.ajax({
                                        method: "PUT",
                                        url: bookingBaseurl,
                                        contentType: "application/json",
                                        async: false,
                                        data: JSON.stringify(
                                            {
                                                bookingID: bookingId,
                                                date: today,
                                                pickupDate: pick,
                                                returnDate: rtndate,
                                                status: "Rent",
                                                customer: customer,
                                                car: car,
                                                driver: driver
                                            }
                                        ),
                                        success: function (data) {
                                            loadAllCRBooking();
                                            $("#btnRent").attr("disabled", true);
                                            $('#grossTotalPlaceOrder').text("");


                                        }
                                    });

                                    alert('Payment success! payment ID:'+pid);
                                }
                            });



});








