
function loginvalidate() {
	debugger;
	alert("4545");
    $('#regform').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
        },
        messages: {
            email: {
                required: 'Email Empty',
                email: 'Email Invalid',
            },
            password: {
                required: 'Password Required',
                minlength: 'Atleast 8 characters required'
            }
        }, errorPlacement: function (error, element) {
            if (element.attr("name") == "password")
                $("#passworderror").html(error);
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
                url: 'http://localhost/codeigniter/login',
                dataType: 'json',
                data: postdata,
                success: checklogin,
                error: function (error) {
                    alert(JSON.stringify(error));
                }
            });
        }
    });
}
function checklogin(result) {
    if (result.code == 400) {
        $.each(result.message, function (index, element) {
            if (element != "") {
                $("#" + index + "error").html(element);
            }
        });
    }
    else if (result.code == 200) {
        alert("login Successful");
        window.location.href=result.message;
    }

}

//

  $(document).ready(function() {
    // $("div").click(function() {alert("jquery test");});
  
 });

$(document).ready(function () {
    $("#register").click(function () {
        var b = true;
        var postdata = {};
        var formdata = $("#regform").serializeArray();
        $(formdata).each(function (index, obj) {
            postdata[obj.name] = obj.value;
        });

        if(password(postdata["password"],postdata["rpassword"])==false){
            $("#passerror").text("PassWord Doesnt Match");
            b==false ;
        }

        if(isEmail(postdata["email"])==false){
            b==false ;
            $("#emailerror").text("Invalid Email");
        }

        if(b){
        $.ajax({
            type: 'POST',
            url: 'http://localhost/codeigniter/users/show',
            dataType: 'json',
            data: postdata,//{
            //     fname : postdata["fname"],
            //     lname : postdata["lname"],
            //     email : postdata["email"],
            //     password : postdata["password"]
            // },//JSON.stringify(data),
            success: function (result) {
                alert(JSON.stringify(result));
            },
            error: function (error) {
                alert(JSON.stringify(error));
            }
        });
        }

        alert("bye");
    });
});

function password(pass, rpass) {
    if (rpass == pass) {
        return true;
    }
    else
        return false;
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
