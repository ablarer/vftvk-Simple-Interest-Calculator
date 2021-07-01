function compute(){

var flag = checkdata();

if (flag) {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    p = document.getElementById("principal").value;
}


function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}


function checkdata() {
    var p = document.getElementById("principal");

    if (p.value <= 0) {
        alert('Enter a positive number')
        p.focus();
        return false
    }
    return true
}

function formReset() {
    document.getElementById("form1").reset();
    document.getElementById("result").innerHTML = "";
    const rate = document.getElementById("rate");
    rate.value = 10.25;
    updateRate()
}