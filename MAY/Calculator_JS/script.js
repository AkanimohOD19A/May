// Calculate Tip

function calculateTip() {
    var bill = document.getElementById("bill_amt").value;
    var qual = document.getElementById("serviceQual").value;
    var num = document.getElementById("people_amt").value;

    // Validate Input
    if (bill === "" || qual === 0) {
        alert("Please enter values");
        return;
    }
    // Check to see if this input is empty or less than or equal to 1
    if (num === "" || num <= 1) {
        num = 1;
        document.getElementById("each").style.display = 'none';
    } else {
        document.getElementById("each").style.display = 'block';
    }
    // Calculate Tip
    var total = (bill * qual) / num;

    // Round to 2df
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2); //allows for 2df space

    // Display Tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = total;

}

// Hide the Tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
