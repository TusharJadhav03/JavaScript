function myName(){
    getValue = document.getElementById("userName").value;
    if(getValue.length<=4){
        document.getElementById("ErrUser").innerHTML = "Type More Letters";
    }
    else if(getValue.length>=20){
        document.getElementById("ErrUser").innerHTML = "Type Less Letters";
    }
    else{
        document.getElementById("ErrUser").innerHTML = "";
    }
}
function myEmail(){
    getValue = document.getElementById("userEmail").value;
    Pattern =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if(Pattern.test(getValue)){   
        document.getElementById("ErrEmail").innerHTML = "";
    }
    else{
        document.getElementById("ErrEmail").innerHTML = "Enter Valid Email";
    }
}

function myPass(){
    getValue = document.getElementById("userPass").value;
    Pattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(Pattern.test(getValue)){
        document.getElementById("ErrPass").innerHTML ="";
    }
    else{
        
        document.getElementById("ErrPass").innerHTML = "Enter Strong Password";
    }

}

function myConPass(){
    getValue = document.getElementById("userConPass").value;
    Pattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(Pattern.test(getValue)){
        document.getElementById("ErrConPass").innerHTML ="";
    }
    else{
        
        document.getElementById("ErrConPass").innerHTML = "Enter Strong Password";
    }
}

function showPass(){
    var hideValue = document.getElementById("show").innerHTML;
    if(hideValue== "Show"){
        document.getElementById("show").innerHTML = "Hide";
        document.getElementById("userPass").setAttribute("type","text");
        hideValue = false;
    }
    else{
        document.getElementById("show").innerHTML = "Show";
        document.getElementById("userPass").setAttribute("type","password");
        hideValue = true;
    }

}

function myValue(){
    var pass1 = document.getElementById("userPass").value;
    var pass2 = document.getElementById("userConPass").value;

    if(pass1 == pass2){
        alert("Correct Password")
    }
    else{
        alert("Type Correct Password")
    }

}