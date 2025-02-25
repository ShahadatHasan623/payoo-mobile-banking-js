document.getElementById("casout").style.display = "none";
document.getElementById("add-money-box")
    .addEventListener('click', function () {
        handleToggle("add-money", "block");
        handleToggle("casout", "none");
    });

document.getElementById("casout-box")
    .addEventListener('click', function () {
         handleToggle("casout","block");
         handleToggle("add-money","none");
    });
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}