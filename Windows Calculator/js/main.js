function sendData(data) {
    document.getElementById("output").value += data;
}

function calCulate() {
    document.getElementById("output").value = eval(document.getElementById("output").value);
}

function calculateOther(getMethod) {
    var boxVal = document.getElementById("output").value;

    if (getMethod == "pow") {
        document.getElementById("output").value = Math.pow(document.getElementById("output").value, 2);
    }
    else if (getMethod == "sqrt") {
        document.getElementById("output").value = Math.sqrt(document.getElementById("output").value);
    }
    else if (getMethod == "singleClear"){
        document.getElementById("output").value = boxVal.slice(0,boxVal.length-1);
    }
    else if (getMethod == "clear"){
        document.getElementById("output").value = "";
    }
    else if (getMethod == "sqrt1"){
        document.getElementById("output").value = Math.SQRT1_(document.getElementById("output").value);
    }
    else if (getMethod == "%"){
        document.getElementById("output").value = document.getElementById("output").value % 2;
    }
    else if (getMethod == "1/x"){
        document.getElementById("output").value = 1/ document.getElementById("output").value;
    }
}