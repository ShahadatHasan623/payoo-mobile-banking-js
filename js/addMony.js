document.getElementById('add-mony')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount =getInputValue("amount");
        const mainBalance =getMainBalance("main-balance")
        const pin =getPinValue("pin");
        const accountNumber =document.getElementById("account-number").value ;
        if(accountNumber.length === 11){
            if(pin===1234){
                const sum =mainBalance + amount ;
                setInnerTextvlue("main-balance",sum)
            }
            else{
                alert("Enter Your Valid Pin");
            }
        }
        else{
            alert("Enter Your Valid Number")
        }

    })
