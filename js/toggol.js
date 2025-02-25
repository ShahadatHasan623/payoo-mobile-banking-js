document.getElementById("casout").style.display = "none";
document.getElementById("add-money-id").style.display = "block";
document.getElementById("add-money-box")
    .addEventListener('click', function () {
       
        document.getElementById("casout").style.display = "none";
        document.getElementById("add-money-id").style.display = "block";
        
    })

document.getElementById("casout-box")
    .addEventListener('click', function () {
        document.getElementById("add-money-id").style.display = "none";
        document.getElementById("casout").style.display = "block";
    })