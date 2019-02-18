function regvalidate() {
    $('#regform').validate({
        rules: {
            fname: 'required',
            lname: 'required',
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
            rpassword: {
                required: true,
                minlength: 8,
                equalTo: '#password'
            }
        },
        messages: {
            fname: 'First Name Empty',
            lname: 'Last Name Empty',
            email: {
                required: 'Email Empty',
                email: 'Email Invalid',
            },
            password: {
                required: 'Password Required',
                minlength: 'Atleast 8 characters required'
            },
            rpassword: {
                required: 'Password Empty',
                minlength: "Less Than 8 Chars",
                equalTo: 'Passwords Didnt Match'
            }
        }, errorPlacement: function (error, element) {
            if (element.attr("name") == "fname")
                $("#fnameerror").html(error);
            else if (element.attr("name") == "lname")
                $("#lnameerror").html(error);
            else if (element.attr("name") == "password")
                $("#passworderror").html(error);
            else if (element.attr("name") == "rpassword")
                $("#rpassworderror").html(error);
            else if (element.attr("name") == "email")
                $("#emailerror").html(error);
        },
        submitHandler: function () {
            var postdata = {};
            var formdata = $("#regform").serializeArray();
            $(formdata).each(function (index, obj) {
                postdata[obj.name] = obj.value;
            });
            $.ajax({
                type: 'POST',
                url: 'http://localhost/codeigniter/users/register',
                dataType: 'json',
                data: postdata,
                success: showResp,
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        }
    });
}

function showResp(result) {
    if (result.code == 400) {
        $.each(result.message, function (index, element) {
            if (element != "") {
                $("#" + index + "error").html(element);
            }
        });
    }
    else if (result.code == 200) {
        alert("Registration Successful");
        window.location.href=result.message;
    }

}

function phpvalid() {
    var postdata = {};
    var formdata = $("#regform").serializeArray();
    $(formdata).each(function (index, obj) {
        postdata[obj.name] = obj.value;
    });
    $.ajax({
        type: 'POST',
        url: 'http://localhost/codeigniter/users/valid',
        dataType: 'json',
        data: formdata,
        success: function (result) {
            alert(JSON.stringify(result));
        },
        error: function (error) {
            alert(JSON.stringify(error));
        }
    });
}