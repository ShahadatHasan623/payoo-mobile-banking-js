document.getElementById("casout").style.display = "none";
document.getElementById("transaction-history").style.display ="none";
document.getElementById("transfer-money").style.display ="none";
document.getElementById("get-bonus").style.display ="none";
document.getElementById("pay-bill").style.display ="none";
document.getElementById("add-money-box")
    .addEventListener('click', function () {
        handleToggle("add-money", "block");
        handleToggle("casout", "none");
        handleToggle("transaction-history","none")
        handleToggle('transfer-money','none')
        handleToggle('get-bonus','none')
        handleToggle('pay-bill','none')

    });

document.getElementById("casout-box")
    .addEventListener('click', function () {
         handleToggle("casout","block");
         handleToggle("add-money","none");
         handleToggle("transaction-history","none");
         handleToggle('transfer-money','none')
         handleToggle('get-bonus','none')
         handleToggle('pay-bill','none')

    });
