const driverBaseUrl="http://localhost:8080/api/v1/driver";
const loginBaseurl="http://localhost:8080/api/v1/login";
const bookingBaseurl="http://localhost:8080/api/v1/booking";


getLastLoginData();

function getLastLoginData() {
    $.ajax({
        method: "GET",
        url: loginBaseurl+'/lastLogUser',
        async: false,
        success: function (response) {
            let userName = response.data;
            console.log("userName login " + userName);
            getAllDriverData(userName);
        }
    });
}

function getAllDriverData(userName) {
    $.ajax({
        method: "GET",
        url: driverBaseUrl+ '/get/' + userName,
        async: false,
        success: function (response) {
            let data = response.data;
            $('#driverID').val(data.driverID);
            $('#driverName').val(data.name);
            $('#driverContact').val(data.contactNo);
            $('#driverNic').val(data.nic);
            $('#driverPw').val(data.password);
            loadAllSchedule();
        }
    });

}

function loadAllSchedule() {
    let id = $('#driverID').val();
    console.log("in");

    $('#driverScheduleTBody').empty();
    $.ajax({
        method: 'GET',
        url: bookingBaseurl+"/get/list/" + id,
        dataType: 'json',
        async: true,
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {

                let custName = response[i].customer.name;
                let contact = response[i].customer.contact;
                let carID = response[i].car.carId;
                let pick = response[i].pickupDate;
                let rtnd = response[i].returnDate;

                var row = `<tr><td>${custName}</td><td>${contact}</td><td>${carID}</td><td>${pick}</td><td>${rtnd}</td></tr>`;
                $('#tblDriverScheduleBody').append(row);

            }
        }
    });
}




//Start Driver Validation Section
function checkValidationDriverProfile() {

    let driverProfileId = $('#driverID').val();
    let driverProfileName = $('#driverName').val();
    let driverProfileNic = $('#driverNIC').val();
    let driverProfilePassword = $('#driverPassword').val();
    let driverProfileContact = $('#driverContact').val();

    if (driverProfileId != "") {
        if (driverProfileName != "") {
            if (driverProfileNic != "") {
                    if (driverProfileContact != "") {
                        if (driverProfilePassword!="") {
                            return true;
                        } else {
                            $('#DriverContact').css({
                                'border': '2px #FF0000FF solid'
                            });
                            $('#DriverContact').focus();
                            alert("Please Enter Password");
                            return false;
                        }
                    } else {
                        $('#DriverPassword').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#DriverPassword').focus();
                        alert("Please Enter Contact");
                        return false;
                    }

            } else {
                $('#DriverNIC').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#DriverNIC').focus();
                alert("Please Enter Nic");
                return false;
            }
        } else {
            $('#DriverName').css({
                'border': '2px #FF0000FF solid'
            });
            $('#DriverName').focus();
            alert("Please Enter Name");
            return false;
        }
    } else {
        $('#DriverID').css({
            'border': '2px #FF0000FF solid'
        });
        $('#DriverID').focus();
        alert("Please Enter id");
        return false;
    }
}
//End Driver Validation Section

//Start Driver Save Section
// $('#btnDriverUpdate').click(() => {
//
//     if (checkValidationDriverProfile()) {
//         let driverProfileId = $('#driverID').val();
//         let driverProfileName = $('#driverName').val();
//         let driverProfileNic = $('#driverNIC').val();
//         let driverProfilePassword = $('#driverPassword').val();
//         let driverProfileContact = $('#driverContact').val();
//
//         $.ajax({
//             method: "PUT",
//             url: driverBaseUrl,
//             data: JSON.stringify({
//                 "driverID": driverProfileId,
//                 "name": driverProfileName,
//                 "nic": driverProfileNic,
//                 "contactNo": driverProfileContact,
//                 "password":driverProfilePassword
//             }),
//             dataType: 'Json',
//             contentType: "application/json; charset=utf-8",
//             success: function (res) {
//                 if (res.message == 'Success') {
//                     getLastLoginData();
//                 }
//             },
//             error: function (ob, textStatus, error) {
//             }
//         });
//     }
// });
//End Driver Save Section
