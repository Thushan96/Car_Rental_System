const loginBaseurl="http://localhost:8080/api/v1/login";
const customerBaseUrl="http://localhost:8080/api/v1/customer";
const fileBaseUrl="http://localhost:8080/api/v1/fileUpload";
let userId;


//login
$('#btnLogin').click(function () {

    let userName = $('#userName').val();
    let password = $('#password').val();
    if (checkInputField()) {

        $.ajax({
            method: "GET",
            url: loginBaseurl + userName + '/' + password,
            async: false,
            success: function (response) {
                var role = response.data;
                console.log(role);
                if (role == "Admin") {
                    loginSave("Admin");
                    alert.success('Admin Login', 'success', 2);
                    location.replace("AdminDashBoard.html");
                } else if (role == "Driver") {
                    alert.success('Driver Login', 'success', 2);
                    location.replace("DriverDashBoard.html");
                    loginSave("Driver");

                } else if (role == "Customer") {
                    alert.success('Customer Login', 'success', 2);
                    location.replace("CustomerDashBoard.html");
                    loginSave("Customer");

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })
                }
            }
        });
    } else {
        // $('#driverID').css('border', '3px solid red');
    }
});
//getLastId
getNewLogID();

function getNewLogID() {
    let LastLoginID = 1;
    $.ajax({
        method: "GET",
        url: loginBaseurl+"/newLogId",
        async: false,
        success: function (response) {
            LastLoginID = response.data;
            console.log(LastLoginID + " login 52");
        }
    });
    return LastLoginID;
}

function loginSave(role) {
    let userName = $('#userName').val();
    let password = $('#password').val();
    $.ajax({
        method: "POST",
        url: loginBaseurl,
        contentType: "application/json",
        async: false,
        data: JSON.stringify(
            {
                loginID: getNewLogID(),
                userName: userName,
                password: password,
                role: role
            }
        ),
        success: function (response) {
            console.log("login save method done");

        }
    });
}


$('#userName').on('keyup', function (event) {
    checkInputField();
});

$('#password').on('keyup', function (event) {
    checkInputField();
});


//check user name
function checkInputField() {
    if ($('#userName').val() != "") {
        $('#userName').css('border', '3px solid #0eab34');
        if ($('#password').val() != "") {
            $('#password').css('border', '3px solid #0eab34');
            return true;
        } else {
            $('#password').css('border', '3px solid red');
            return false;
        }
    } else {
        $('#userName').css('border', '3px solid red');
        return false;
    }
}


//check customer name

$('#inputName').on('keyup', function (event) {
    checkCustName();
});

function checkCustName() {
    if (/^[A-z ]{1,}$/.test($('#inputName').val())) {
        $('#inputName').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputName').css('border', '3px solid red');
    }
    return false;
}

//check contact
$('#inputContactNo').on('keyup', function (event) {
    checkCustomerContact();
});

function checkCustomerContact() {
    if (/^[0-9]{10}$/.test($('#inputContactNo').val())) {
        $('#inputContactNo').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputContactNo').css('border', '3px solid red');
    }
    return false;
}


//check address
$('#inputAddress').on('keyup', function (event) {
    checkAddress();
});

function checkAddress() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#inputAddress').val())) {
        $('#inputAddress').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputAddress').css('border', '3px solid red');
    }
    return false;
}

//check email
$('#inputEmail').on('keyup', function (event) {
    checkEmail();
});

function checkEmail() {
    if (/^[A-z, |0-9]{1,}(@gmail.com)$/.test($('#inputEmail').val())) {
        $('#inputEmail').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputEmail').css('border', '3px solid red');
    }
    return false;
}


//check customer nic

$('#inputNIC').on('keyup', function (event) {
    checkCustomerNic();
});

function checkCustomerNic() {
    if (/^[0-9]{9}(V)$/.test($('#inputNIC').val())) {
        $('#inputNIC').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputNIC').css('border', '3px solid red');
    }
    return false;

}

//check customer lienceid

$('#inputDrivingLicence').on('keyup', function (event) {
    checkCustomerLicenceId();
});

function checkCustomerLicenceId() {
    if (/^(B)[0-9]{7}$/.test($('#inputDrivingLicence').val())) {
        $('#inputDrivingLicence').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputDrivingLicence').css('border', '3px solid red');
    }
    return false;

}

//check user name
$('#inputUserName').on('keyup', function (event) {
    checkCustuserName();
});

function checkCustuserName() {
    if (/^[A-z 0-9]*$/.test($('#inputUserName').val())) {
        $('#inputUserName').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputUserName').css('border', '3px solid red');
    }
    return false;
}

//check file input 1
$('#inputfile1').on('keyup', function (event) {
    checkFileChoose1();
});

function checkFileChoose1() {
    console.log($('#inputfile1').val());

    if ($('#inputfile1').val() == '') {
        $('#inputfile1').css('border', '3px solid red');
        alertify.warning('Upload nic copy(front)');

    } else {
        $('#inputfile1').css('border', '3px solid #0eab34');

    }
    return true;

}

//check file input 2
$('#inputfile2').on('keyup', function (event) {
    checkFileChoose2();
});

function checkFileChoose2() {
    console.log($('#inputfile2').val());
    if ($('#inputfile2').val() == '') {
        $('#inputfile2').css('border', '3px solid red');
        alertify.warning('Upload nic copy(back)');

    } else {
        $('#inputfile2').css('border', '3px solid #0eab34');

    }
    return true;
}


//check file input 3
$('#inputfile3').on('keyup', function (event) {
    checkFileChoose3();
});

function checkFileChoose3() {
    console.log($('#inputfile3').val());
    if ($('#inputfile3').val() == '') {
        $('#inputfile3').css('border', '3px solid red');
        alertify.warning('Upload Driving License');

    } else {
        $('#inputfile3').css('border', '3px solid #0eab34');

    }
    return true;
}

//signup
$('#btncreate').click(function () {
        getLastCustID();


        let id = $("#custId").val();
        let name = $("#inputName").val();
        let contact = $("#inputContactNo").val();
        let address = $("#inputAddress").val();
        let email = $("#inputEmail").val();
        let licence = $("#inputDrivingLicence").val();
        let nic = $("#inputNIC").val();
        let userName = $("#inputUserName").val();
        let password = $("#inputPassword").val();
        let file1 = $("#inputfile1").val();
        let file2 = $("#inputfile2").val();
        let file3 = $("#inputfile3").val();

        if (userId!="") {
            console.log("userId not null")
            if (checkCustName() && name != "") {
                if (checkCustomerContact() && contact != "") {
                    if (checkAddress() && address != "") {
                        if (checkEmail() && email != "") {
                            if (checkCustomerLicenceId() && licence != "") {
                                console.log("license num not null")
                                if (checkCustomerNic() && nic != "") {
                                    console.log("check - " + checkCustomerUserNameValidity());
                                    if (checkCustomerUserNameValidity()) {
                                        if (password != null) {
                                            if (checkFileChoose1() && file1 != "") {
                                                if (checkFileChoose2() && file2 != "") {
                                                    if (checkFileChoose3() && file3 != "") {

                                                        $.ajax({
                                                            method: "POST",
                                                            url: customerBaseUrl,
                                                            contentType: "application/json",
                                                            async: false,
                                                            data: JSON.stringify(
                                                                {
                                                                    customerID: userId,
                                                                    name: name,
                                                                    contact: contact,
                                                                    email: email,
                                                                    address: address,
                                                                    drivingLicenceNo: licence,
                                                                    nicNo: nic,
                                                                    userName: userName,
                                                                    password: password
                                                                }
                                                            ),
                                                            success: function (res) {
                                                                uploadFiles();
                                                                clearRegisterFeilds();
                                                                alert('Account Created! Please Login!');
                                                                location.replace("http://localhost:63342/Car_Rental_System/FrontEnd/common/logIn.html");
                                                            },
                                                            error: function (ob) {
                                                                alert(ob.responseJSON.message);
                                                            }
                                                        });
                                                    } else {
                                                        $('#inputfile3').css('border', '3px solid red');
                                                    }
                                                } else {
                                                    $('#inputfile2').css('border', '3px solid red');
                                                }
                                            } else {
                                                $('#inputfile1').css('border', '3px solid red');
                                            }
                                        } else {
                                            $('#inputPassword').css('border', '3px solid red');
                                        }
                                    } else {
                                        $('#inputUserName').css('border', '3px solid red');
                                    }
                                } else {
                                    $('#inputNIC').css('border', '3px solid red');
                                }
                            } else {
                                $('#inputDrivingLicence').css('border', '3px solid red');
                            }
                        } else {
                            $('#inputEmail').css('border', '3px solid red');
                        }
                    } else {
                        $('#inputAddress').css('border', '3px solid red');
                    }
                } else {
                    $('#inputContactNo').css('border', '3px solid red');
                }
            } else {
                $('#inputName').css('border', '3px solid red');
            }
        } else {
            alert("customer Id empty")
        }


    }
);
getLastCustID();


//upload files
function uploadFiles() {
    let id = $("#custID").val();

    var fileObjectNic1 = $("#inputfile1")[0].files[0];//access file object from input field
    // var fileNameNic1 = $("#inputfile1")[0].files[0].name; //get file name
    var fileNameNic1 = userId + "-nicfront"; //get file name

    var fileObjectNic2 = $("#inputfile2")[0].files[0];//access file object from input field
    // var fileNameNic2 = $("#inputfile2")[0].files[0].name; //get file name
    var fileNameNic2 = userId + "-nicback"; //get file name

    var fileObjectLicense = $("#inputfile1")[0].files[0];//access file object from input field
    // var fileNameLicense = $("#inputfile1")[0].files[0].name; //get file name
    var fileNameLicense = userId + "-license"; //get file name

    var data = new FormData(); //setup form data object to send file data
    console.log(fileNameNic1);
    data.append("nic1", fileObjectNic1, fileNameNic1); //append data
    data.append("nic2", fileObjectNic2, fileNameNic2); //append data
    data.append("license", fileObjectLicense, fileNameLicense); //append data

    $.ajax({
        url: fileBaseUrl,
        method: 'POST',
        async: true,
        processData: false, //stop processing data of request body
        contentType: false, // stop setting content type by jQuery
        data: data,
        success: function () {
            console.log("File Uploaded");
        },
        error: function (ob) {
            alert(ob.responseJSON.message);

        }
    });

}



//getLastId
function getLastCustID() {
    $.ajax({
        method: "GET",
        url: customerBaseUrl+'/lastId',
        async: false,
        success: function (response) {
            var data = response.data;
            userId=response.data;
            console.log(response);
            console.log("data " + data);
            $('#custId').val(data);
            console.log($('#custId').val());
        }
    });
}

//check username
function checkCustomerUserNameValidity() {
    let userName = $('#inputUserName').val();
    let verify = false;
    if (checkCustuserName() && userName != "") {
        $.ajax({
            method: "GET",
            url: loginBaseurl +"/"+userName,
            async: false,
            success: function (response) {
                var resp = response.data;
                console.log("response " + resp);
                if (resp == "no") {
                    verify = true;
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: resp,
                    });
                    $('#inputUserName').css('border', '3px solid red');
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }

        });
    }
    return verify;

}

//model text clear
$("#btnClose").click(function () {
    clearRegisterFeilds();
});

function clearRegisterFeilds() {
    $("#inputName").val("");
    $("#inputContactNo").val("");
    $("#inputAddress").val("");
    $("#inputEmail").val("");
    $("#inputDrivingLicence").val("");
    $("#inputNIC").val("");
    $("#inputUserName").val("");
    $("#inputPassword").val("");
    $("#inputfile1").val("");
    $("#inputfile2").val("");
    $("#inputfile3").val("");
}


