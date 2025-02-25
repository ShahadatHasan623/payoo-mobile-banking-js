// step 1 = ID k dhorchi getElementById diye 
document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber =document.getElementById("account-number").value;
    const pin =document.getElementById("pin").value;
    const convertNumber =parseInt(pin)
     
    if(accountNumber.length === 11){
        if(convertNumber === 1234){
            window.location.href ='./main.html'
        }
        else{
            alert("pin thik nai")
        }

    }
    else{
        alert("need valid account number");
    }
})