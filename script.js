// Function to compute interest
function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value; 
    interest = principal*years*rate / 100;
    var future_year = new Date().getFullYear() + parseInt(years);
    // Write the results to screen
    // A string literal is used to embed the variables directly into a single string
    // Variables are cast to strings and converted to boldface
    document.getElementById("result").innerHTML = `If you deposit $${principal.toString().bold()} at an interest rate of ${rate.toString().bold()}%, you will receive an amount of $${interest.toString().bold()} in the year ${future_year.toString().bold()}.`
}

// Gets the interest rate selected and prints to the span below the input slider
function rate_span(){
    rate = document.getElementById("rate").value;
    document.getElementById("ratespan").innerHTML = rate.toString() + " %"
}

// Checks that the principal input is a positive number
// If not, an alert is raised. The focus moves back to the input 
// so the user can input another value without needing to click on the field again
function validate_principal(){
    principal = document.getElementById("principal").value;
    if (principal < 1){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    }
}
        