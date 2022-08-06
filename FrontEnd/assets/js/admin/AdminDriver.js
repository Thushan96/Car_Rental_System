const driverBaseUrl="http://localhost:8080/api/v1/driver";
loadAllDriver();

//Start Admin Driver Validation Section
function checkValidationAdminDriver() {

    let adminDriverId = $('#adDriverId').val();
    let adminDriverName = $('#adDriverName').val();
    let adminDriverNic = $('#adDriverNIC').val();
    let adminDriverContact = $('#adDriverContact').val();
    let adminDriverPassword = $('#adDriverPassword').val();
    let adminDriverUsername = $('#adDriverUsername').val();


    if (adminDriverId != "") {
        if (adminDriverName != "") {
            if (adminDriverNic != "") {
                if (adminDriverContact != "") {
                    if (adminDriverUsername!="") {
                        if (adminDriverPassword) {
                            return true;
                        } else {
                            $('#adDriverEmail').css({
                                'border': '2px #FF0000FF solid'
                            });
                            $('#adDriverEmail').focus();
                            alert("Please Enter Password");
                            return false;
                        }
                    }else {
                        $('#adDriverUsername').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#adDriverUsername').focus();
                        alert("Please Enter Username");
                        return false;
                    }
                } else {
                    $('#adDriverContact').css({
                        'border': '2px #FF0000FF solid'
                    });
                    $('#adDriverContact').focus();
                    alert("Please Enter Contact");
                    return false;
                }
            } else {
                $('#adDriverNIC').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#adDriverNIC').focus();
                alert("Please Enter Nic");
                return false;
            }
        } else {
            $('#adDriverName').css({
                'border': '2px #FF0000FF solid'
            });
            $('#adDriverName').focus();
            alert("Please Enter Name");
            return false;
        }
    } else {
        $('#adDriverId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#adDriverId').focus();
        alert("Please Enter Id");
        return false;
    }
}
//End Admin Driver Validation Section


function clearDriverFields() {
    $('#adDriverId').val("");
    $('#adDriverUsername').val("");
    $('#adDriverNIC').val("");
    $('#adDriverContact').val("");
    $('#adDriverPassword').val("");
    $('#adDriverName').val("");

}

//Start Admin Driver Save Section
$('#btnAdminDriverSave').click(() => {

    if (checkValidationAdminDriver()) {
        let adminDriverId = $('#adDriverId').val();
        let adminDriverName = $('#adDriverName').val();
        let adminDriverNic = $('#adDriverNIC').val();
        let adminDriverContact = $('#adDriverContact').val();
        let adminDriverPassword = $('#adDriverPassword').val();
        let adminDriverUsername = $('#adDriverUsername').val();

        $.ajax({
            method: "POST",
            url: driverBaseUrl,
            data: JSON.stringify({
                "driverID": adminDriverId,
                "name": adminDriverName,
                "contactNo": adminDriverContact,
                "nic": adminDriverNic,
                "userName":adminDriverUsername,
                "password":adminDriverPassword
            }),
            dataType: 'Json',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                loadAllDriver();
                clearDriverFields();
                if (res.code == 200) {
                    alert("Driver Successfully Saved");
                }
            },
            error: function (ob) {
                alert(ob.responseJSON.message);

            }
        });
    }
});

$('#btnAdminDriverGetAll').click(function () {
    loadAllDriver();
    clearDriverFields();
});

function loadAllDriver() {
    $('#tblDriverBody').empty();
    $.ajax({
        url: driverBaseUrl,
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            let values = res.data;
            for (i in values) {
                let adminDriverId = values[i].driverID;
                let adminDriverName = values[i].name;
                let adminDriverNic = values[i].contactNo;
                let adminDriverContact = values[i].nic;

                $('#tblDriverBody').append(`<tr><td>${adminDriverId}</td><td>${adminDriverName}</td><td>${adminDriverNic}</td><td>${adminDriverContact}</td></tr>`)
            }
        }
    });
}
//End Admin Driver Save Section

//Start Driver Update
$("#btnAdminDriverUpdate").click(function (){

    console.log("driver update clicked");

    if (checkValidationAdminDriver()) {
        let adminDriverId = $('#adDriverId').val();
        let adminDriverName = $('#adDriverName').val();
        let adminDriverNic = $('#adDriverNIC').val();
        let adminDriverContact = $('#adDriverContact').val();
        let adminDriverPassword = $('#adDriverPassword').val();


        $.ajax({
            method: "PUT",
            url: driverBaseUrl,
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "driverID": adminDriverId,
                    "name": adminDriverName,
                    "contactNo": adminDriverContact,
                    "nic": adminDriverNic,
                    "userName": adminDriverId,
                    "password": adminDriverPassword
                }
            ),
            success: function (data) {
                loadAllDriver();
                clearDriverFields();
                alert("Driver Successfully Updated");
                return true;
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    }

});

//Driver Search
$("#driverSearchbtn").click(function (){
    console.log("driver Search clicked");

    let id = $("#driverCustomer").val();
    if (id != "") {
        $.ajax({
            method: "GET",
            url: driverBaseUrl + "/" +id,
            async: false,
            dataType: 'json',
            success: function (response) {
                var data = response.data;
                $('#adDriverId').val(data.driverID);
                $('#adDriverName').val(data.name);
                $('#adDriverNIC').val(data.nic);
                $('#adDriverContact').val(data.contactNo);
                $('#adDriverPassword').val(data.password);
                $('#adDriverUsername').val(data.userName);
                loadAllDriver();
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
                loadAllDriver();
            }
        });
    } else {
        alert("Enter Driver ID to Search")
    }
} );

//Driver delete
$("#btnAdminDriverDelete").click(function (){
    let id = $("#adDriverId").val();
    if (id != "") {
        $.ajax({
            method: "DELETE",
            url: driverBaseUrl+"/" +id,
            async: true,
            success: function (response) {
                loadAllDriver();
                clearDriverFields();
                alert("Driver Successfully Deleted");
            },
            error: function (ob) {
                alert(ob.responseJSON.message);
            }
        });
    }
});


