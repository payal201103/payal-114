submitForm = () => {
    let fname, lname, username, email, gender, password, Cpassword;
    fname = document.myform.Fname.value;
    lname = document.myform.lname.value;
    email = document.myform.email.value;
    gender = document.myform.gender.value;
    password = document.myform.password.value;
    Cpassword = document.myform.Cpassword.value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (fname == null || fname == "" || fname == undefined) {
        document.getElementById("msg1").innerHTML = "please Enter Your Firstname";

    } else {
        document.getElementById("msg1").style.opacity = "0";

    }
    if (lname == null || lname == "" || lname == undefined) {
        document.getElementById("msg2").innerHTML = "please enter the Lastname";
    } else {
        document.getElementById("msg2").style.opacity = "0";

    }

    if (email == null || email == "" || email == undefined) {
        document.getElementById("msg3").innerHTML = "Please Enter Your Email Address";
    } else {
        document.getElementById("msg3").style.opacity = "0";
    }
    if (!email.match(mailformat)) {
        document.getElementById("msg3").innerHTML = "Please Enter Your Valid Email Address";

    } else {
        document.getElementById("msg3").style.opacity = "0";

    } if (password == null || password == "" || password == undefined) {
        document.getElementById("msg4").innerHTML = "Please Enter Your Password";

    } else {
        document.getElementById("msg4").style.opacity = "0";

    } if (Cpassword == null || Cpassword == "" || password != Cpassword) {
        document.getElementById("msg5").innerHTML = "Password Does Not Match";

    } else {

        let fname, lname, email, gender, password, Cpassword;
        fname = document.myform.Fname.value
        lname = document.myform.lname.value
        email = document.myform.email.value
        gender = document.myform.gender.value
        password = document.myform.password.value
        Cpassword = document.myform.Cpassword.value

        let user_records = new Array();
        user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
        if (user_records.some((v) => { return v.email == email })) {
            alert(email + " is already register.")
            return false;

        } else {

            user_records.push({
                "fname": fname,
                "lname": lname,
                "email": email,
                "gender": gender,
                "password": password,
                "Cpassword": Cpassword
            })
        }

        localStorage.setItem("users", JSON.stringify(user_records))
        alert(email + "Thanks for registration. \n try to login now")
        console.log("login")
        window.location.href = "signin.html";

    }
    return true;
}
