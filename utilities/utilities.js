
function getInputValue(id){
    const amount =document.getElementById(id).value ;
    const convertedAmount =parseFloat(amount);
    return convertedAmount;

}
// pin number value
function getPinValue(pinvalue){
    const pin = document.getElementById(pinvalue).value ;
    const convertedPin =parseInt(pin);
    return convertedPin;
}

// main balance value 
function getMainBalance(main){
    const mainBalance =document.getElementById(main).innerText;
    const mainBalanceConverted =parseFloat(mainBalance);
    return mainBalanceConverted;
}

function setInnerTextvlue(id,value){
    document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}
