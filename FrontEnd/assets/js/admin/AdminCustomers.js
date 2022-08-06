const customerBaseUrl="http://localhost:8080/api/v1/customer";
loadAllCustomer();

//Start Admin Customer Validation Section
function checkValidationAdminCustomer() {

    let custId = $('#adCustId').val();
    let custName = $('#adCustName').val();
    let custAdd = $('#adCustAddress').val();
    let custEmail = $('#adCustEmail').val();
    let custNic = $('#adCustNic').val();
    let custDl = $('#adCustDl').val();
    let custContact = $('#adCustContact').val();
    let custPassword = $('#adCustPassword').val();

    if (custId != "") {
        if (custName != "") {
            if (custAdd != "") {
                if (custEmail != "") {
                    if (custNic != "") {
                        if (custDl != "") {
                            if (custContact) {
                                return true;
                            } else {
                                $('#adCustContact').css({
                                    'border': '2px #FF0000FF solid'
                                });
                                $('#adCustContact').focus();
                                alert("Please Enter Contact");
                                return false;
                            }
                        } else {
                            $('#adCustDl').css({
                                'border': '2px #FF0000FF solid'
                            });
                            $('#adCustDl').focus();
                            alert("Please Enter Driver License");
                            return false;
                        }
                    } else {
                        $('#adCustNic').css({
                            'border': '2px #FF0000FF solid'
                        });
                        $('#adCustNic').focus();
                        alert("Please Enter Nic");
                        return false;
                    }
                } else {
                    $('#adCustEmail').css({
                        'border': '2px #FF0000FF solid'
                    });
                    $('#adCustEmail').focus();
                    alert("Please Enter Email");
                    return false;
                }
            } else {
                $('#adCustAddress').css({
                    'border': '2px #FF0000FF solid'
                });
                $('#adCustAddress').focus();
                alert("Please Enter Address");
                return false;
            }
        } else {
            $('#adCustName').css({
                'border': '2px #FF0000FF solid'
            });
            $('#adCustName').focus();
            alert("Please Enter Name");
            return false;
        }
    } else {
        $('#adCustId').css({
            'border': '2px #FF0000FF solid'
        });
        $('#adCustId').focus();
        alert("Please Enter Id");
        return false;
    }
}

//End Admin Customer Validation Section

function clearCustomerFields() {
    $('#adCustId').val(null);
    $('#adCustName').val("");
    $('#adCustAddress').val("");
    $('#adCustEmail').val("");
    $('#adCustNic').val("");
    $('#adCustDl').val("");
    $('#adCustContact').val("");
    $('#adCustPassword').val("");
    $('#adCustUserName').val("");


}

//Start Admin Save Section
$('#btnAdminCustomerSave').click(function () {

    console.log("Save Clicked");

    if (checkValidationAdminCustomer()) {
        let custId = $('#adCustId').val();
        let custName = $('#adCustName').val();
        let custAdd = $('#adCustAddress').val();
        let custEmail = $('#adCustEmail').val();
        let custNic = $('#adCustNic').val();
        let custDl = $('#adCustDl').val();
        let custContact = $('#adCustContact').val();
        let custPassword = $('#adCustPassword').val();
        let userName = $('#adCustUserName').val();


        $.ajax({
            method: "POST",
            url: customerBaseUrl,
            dataType: 'Json',
            async: true,
            contentType: "application/json",
            data: JSON.stringify({
                customerID: custId,
                name: custName,
                contact: custContact,
                address: custAdd,
                email: custEmail,
                nicNo: custNic,
                drivingLicenceNo: custDl,
                password: custPassword,
                userName:userName
            }),
            success: function (res) {
                alert("Customer Successfully Registered");
                loadAllCustomer();
                clearCustomerFields();

            },
            error: function (ob) {
                alert(ob.responseJSON.message);

            }
        });
    }
});
//End Admin Save Section

//Start Get Admin Customer Section
function loadAllCustomer() {
    $('#tblCustomerBody').empty();
    $.ajax({
        url: customerBaseUrl,
        method: 'GET',
        async: false,
        dataType: 'json',
        success: function (res) {
            for (const customer of res.data) {

                let row=`<tr><td>${customer.customerID}</td><td>${customer.nicNo}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.email}</td><td>${customer.drivingLicenceNo}</td><td>${customer.contact}</td></tr>`;
                console.log(row)

                $('#tblCustomerBody').append(row);
            }
        }

    });
}

$('#btnAdminCustomerGetAll').click(function () {
    loadAllCustomer();
    clearCustomerFields();
});
//End Get Admin Customer Section

//Start Admin Customer Update
$('#btnAdminCustomerUpdate').click(function () {

    console.log("update clicked");
    if (checkValidationAdminCustomer()) {
        let custId = $('#adCustId').val();
        let custName = $('#adCustName').val();
        let custAdd = $('#adCustAddress').val();
        let custEmail = $('#adCustEmail').val();
        let custNic = $('#adCustNic').val();
        let custDl = $('#adCustDl').val();
        let custContact = $('#adCustContact').val();
        let custPassword = $('#adCustPassword').val();
        let userName = $('#adCustUserName').val();


        $.ajax({
            method: "put",
            url: customerBaseUrl,
            contentType: "application/json",
            async: false,
            data: JSON.stringify(
                {
                    "customerID": custId,
                    "name": custName,
                    "contact": custContact,
                    "address": custAdd,
                    "email": custEmail,
                    "nicNo": custNic,
                    "drivingLicenceNo": custDl,
                    "password": custPassword,
                    "userName":userName
                }
            ),
            success: function (data) {
                alert("Customer Successfully Registered");
                loadAllCustomer();
                clearCustomerFields();
                getLastCustomerId();
                return true;
            },
            error: function (ob) {
                alert(ob.responseJSON.message);

            }
        });
    }
});

//End Admin Customer Update

//Start Delete Customer Section
$('#btnAdminCustomerDelete').click(function () {
    let id = $("#adCustId").val();
    if (id != "") {
        $.ajax({
            method: "delete",
            url: customerBaseUrl + id,
            async: true,
            success: function (response) {
                alert("Customer Successfully Deleted");
                loadAllCustomer();
                getLastCustomerId();
                clearCustomerFields();
                console.log("deleted")
            },
            error: function (ob) {
                alert(ob.responseJSON.message);

            }
        });
    }

});
//End Delete Customer Section

//Start Search Customer Section
$("#customerSearchbtn").click(function (){
    console.log("customer Searched");

    $("#tblCustomerBody").empty();
    let id = $("#searchCustomer").val();
    console.log(id);

    if (id != "") {
        $.ajax({
            method: "GET",
            url: customerBaseUrl+ "/" + id,
            dataType: 'json',
            success: function (response) {
                var data = response.data;

                $('#adCustId').val(data.customerID);
                $('#adCustName').val(data.name);
                $('#adCustAddress').val( data.address);
                $('#adCustEmail').val(data.email);
                $('#adCustNic').val(data.nicNo);
                $('#adCustDl').val(data.drivingLicenceNo);
                $('#adCustContact').val(data.contact);
                $('#adCustUserName').val(data.userName);
                $('#adCustPassword').val(data.password);
                loadAllCustomer();

            },
            error: function (ob) {
                loadAllCustomer();
                alert(ob.responseJSON.message);
            }

        });
    }else {
        alert("Enter Customer Id to Search")
    }

});

//End Search Customer Section

