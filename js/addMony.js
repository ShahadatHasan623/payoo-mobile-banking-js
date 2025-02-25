document.getElementById('add-mony')
.addEventListener('click',function(event){
    event.preventDefault();
    const amount =document.getElementById("amount").value;
    const convertAmount =parseFloat(amount);
    const pin =document.getElementById("pin").value;
    const pinConvert =parseInt(pin);
    const mainBalance =document.getElementById("main-balance").innerText;
    const convertMainBalance =parseFloat(mainBalance);
    if(pinConvert === 1234){
        const sum = convertMainBalance + convertAmount;
        document.getElementById("main-balance").innerText =sum;
    }
    else{
        alert("pin sothik na")
    }
})