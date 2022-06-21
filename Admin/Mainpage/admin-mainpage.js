function validate(){
    var account = document.getElementById("InputAccount").value;
    var password = document.getElementById("InputPassword1").value;
    login = document.getElementById("login-panel");
    if (account == "admin" && password == "messi"){
        login.remove();
        login = null;
        alert("Login successfully!");
    }
    else{
        alert("Login failed!");
    }
}

