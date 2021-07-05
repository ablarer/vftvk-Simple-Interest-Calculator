/**
 * Computes the amount of money based on your principal (amount of money of your initial deposit), the interest rate
 * and the number of years you keep your deposit you get plus the interest rate in percent on your account
 */
function compute() {

    var flag = checkdata();

    if (flag) {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        /**
         * Calculates the amount of money you will get after a certain amount your account is running, the interest
         * rate and the initial amount of money on your deposit
         * @type {number}
         */
        var amount = principal * years * rate / 100;
        /**
         * Calculates the year when your investment ends
         * @type {number}
         */
        var year = new Date().getFullYear() + parseInt(years);

        /**
         * Composes the results in a user friendly way.
         * @type {string}
         */
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>\
        at an interest rate of <mark>" + rate + "%</mark>.<br>\
        You will receive an amount of <mark>" + amount + "</mark>,<br>\
        in the year <mark>" + year + "</mark><br>"
    }
}

/**
 *Refreshes the forms content and shows the percentage of the rate in percent
 */
function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval+"%";
    }


/**
 *Checks if the given values are valid
 * @returns {boolean}
 */
function checkdata() {
        var p = document.getElementById("principal");

        if (p.value <= 0) {
            alert('Enter a positive number')
            p.focus();
            return false
        }
        return true
}