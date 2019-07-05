


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('button').onclick = function(){
    var getEmail = document.getElementById('email').value;
    var getPassword = document.getElementById('password').value;
    if(getEmail == '' && getPassword == ''){
        document.getElementById('invalid').innerHTML = "please insert email & password";
        document.getElementById('invalid').style.display = "block";
        document.getElementById('valid').style.display = "none"
    }else if(getEmail == ""){
        document.getElementById('invalid').innerHTML = "please insert email";
        document.getElementById('invalid').style.display = "block";
        document.getElementById('valid').style.display = "none"
    }else if(getPassword == ""){
        document.getElementById('invalid').innerHTML = "please insert password";
        document.getElementById('invalid').style.display = "block";
        document.getElementById('valid').style.display = "none"
    }else if(validateEmail(getEmail) == false){
        document.getElementById('invalid').innerHTML = "please insert valid email";
        document.getElementById('invalid').style.display = "block";
        document.getElementById('valid').style.display = "none"
    }else {
        document.getElementById('valid').innerHTML = "You have been logged in successfully";
        document.getElementById('valid').style.display = "block";
        document.getElementById('invalid').style.display = "none"
    }
}
