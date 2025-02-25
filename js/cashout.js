document.getElementById("cashout-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValue("cashout-amount");
        const mainBalance = getMainBalance("main-balance")
        const pin = getPinValue("pin");
        const accountNumber = document.getElementById("account-number").value;
        if(accountNumber.length === 11){
            if(pin===1234){
                const sub = mainBalance - amount ;
                setInnerTextvlue("main-balance",sub);
            }
            else{
                alert("Enter Your valid Pin Number");
            }
        }
        else{
            alert("Emter your valid Phone Number");
        }

    })