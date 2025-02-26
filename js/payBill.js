document.getElementById("pay-bill-box").addEventListener('click',function(){
    handleToggle("add-money","none");
    handleToggle("casout","none");
    handleToggle("transaction-history","none")
    handleToggle('transfer-money','none');
    handleToggle('get-bonus','none');
    handleToggle('pay-bill', 'block');
})