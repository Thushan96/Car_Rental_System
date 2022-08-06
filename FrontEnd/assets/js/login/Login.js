const loginBaseurl="http://localhost:8080/api/v1/login";

$("#btn_Login").click(function () {
        let userName = $('#userName').val();
        let password = $('#password').val();

    if (checkInputField()) {

        console.log(userName);
        console.log(password);

        $.ajax({
            method: "GET",
            url: loginBaseurl+'/' + userName + '/' + password,
            async: false,
            success: function (response) {
                var role = response.data;
                console.log(role);
                if (role == "Admin") {
                    loginSave("Admin");
                    location.replace("AdminDashBoard.html");
                } else if (role == "Driver") {
                    location.replace("DriverDashBoard.html");
                    loginSave("Driver");

                } else if (role == "Customer") {
                    location.replace("CustomerDashBoard.html");
                    loginSave("Customer");

                } else {
                    alert("User not found! Try Again or Sign In");
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    } else {
        // $('#driverID').css('border', '3px solid red');
    }

    }
);

function loginSave(role) {
    let userName = $('#userName').val();
    let password = $('#password').val();
    $.ajax({
        method: "post",
        url: loginBaseurl,
        contentType: "application/json",
        async: false,
        data: JSON.stringify(
            {
                loginID: getNewLogID(),
                password: password,
                userName: userName,
                role: role
            }
        ),
        success: function (response) {
            console.log("login save method done");

        }
    });
}

getNewLogID();

function getNewLogID() {
    let LastLoginID = 1;
    $.ajax({
        method: "GET",
        url: loginBaseurl+'/newLogId',
        async: false,
        success: function (response) {
            LastLoginID = response.data;
            console.log(LastLoginID + "LAST login ");
        }
    });
    return LastLoginID;
}



$('#userName').on('keyup', function (event) {
    checkInputField();
});

$('#password').on('keyup', function (event) {
    checkInputField();
});


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
