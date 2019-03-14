$("document").ready(function () {
    let username = $("#username");
    let password = $("#password");
    let password2 = $("#password2");
    let age = $("#age");


    function valid() {

        $('.button1').prop('disabled', false);
        $("#register-form").submit(function (e) {
            e.preventDefault();
            console.log("submitted");
            
        })
    }

    function notValid() {
        $('.button1').prop('disabled', true);

    }

    username.blur(function () {
        $(".error").remove();
        if (username.val().length < 6) {
            username.after("<span class='error'>Username must be 6 characters and above!");
            // $('.button1').prop('disabled', true);
            notValid();
        } else {
            //If there is text in the input, then enable the button
            // $('.button1').prop('disabled', false);
            valid();
        }

    })

    password.blur(function () {
        $(".error").remove();
        if (password.val().length < 8) {
            password.after("<span class='error'>Password must be 8 Characters and above!");
            // $('.button1').prop('disabled', true);
            notValid();
        } else {
            //If there is text in the input, then enable the button
            // $('.button1').prop('disabled', false);
            valid();
        }
    })

    password2.blur(function () {
        $(".error").remove();
        if (password2.val().length < 1) {
            password2.after("<span class='error'>Please confirm password");
            // $('.button1').prop('disabled', true);
            notValid();
        }
        if (password2.val() != password.val()) {
            password2.after("<span class='error'>Passwords don't match!");
            // $('.button1').prop('disabled', true);
            notValid();
        } else {
            //If there is text in the input, then enable the button
            // $('.button1').prop('disabled', false);
            valid();
        }
    })

    age.blur(function () {
        $(".error").remove();
        if (age.val() < 18) {
            age.after("<span class='error'>You must be 18 and above to register!");
            $('.button1').prop('disabled', true);
            notValid();
        } else {
            //If there is text in the input, then enable the button
            $('.button1').prop('disabled', false);
            valid();
        }
    })



    // $("#register-form").submit(function (e) {
    //     e.preventDefault();
    //     let username = $("#username").val();
    //     let age = $("#age").val();
    //     let password = $("#password").val();
    //     let confirmpassword = $("#password2").val();

    //     $(".error").remove();

    //     if (username.length < 6) {
    //         $("#username").after("<span class='error'>Username Required!");
    //     }
    //     if (age < 18) {
    //         $("#age").after("<span class='error'>Required age is 18 and above!");
    //     }
    //     if (password.length < 6) {
    //         $("#password").after("<span class='error'>Password must be more than 6 characters!");
    //     }
    //     if (confirmpassword.length < 6 ) {
    //         $("#password2").after("<span class='error'>Password must be more than 6 characters!");
    //     }
    //     if(confirmpassword != password){
    //         $("#password2").after("<span class='error'>Passwords don't match!");
    //     }
    // })

})