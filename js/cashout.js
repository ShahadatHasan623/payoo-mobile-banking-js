document.getElementById("cashout-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValue("cashout-amount");
        const mainBalance = getMainBalance("main-balance")
        const pin = getPinValue("pin");
        const accountNumber = document.getElementById("account-number").value;
        if(amount > mainBalance){
            alert("invalid amount");
            return;
        }
        if(accountNumber.length === 11){
            if(pin===1234){
                const sub = mainBalance - amount ;
                setInnerTextvlue("main-balance",sub);

                const container = document.getElementById("transaction-container");
                const div =document.createElement("div");
                div.classList.add("bg-green-300");
                div.style.display ="flex";
                div.style.justifyContent = "space-around";
                div.style.alignItems = "center";
                div.style.padding = "15px";
                div.style.marginTop = "20px";
                div.classList.add("rounded-xl");
                div.classList.add("gap-4");

                div.innerHTML = `
                  <div class="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-slate-200"><img class="w-[100px]" src="./assests/send 1.png"></div>
                  <div><h1 class="text-xl font-bold">Electricity Bill </h1>
                  <h3>Amount : ${amount} </h3>
                  <p>Account Number :${accountNumber} </p>
                  </div>
                `
                container.appendChild(div);
                


            }
            else{
                alert("Enter Your valid Pin Number");
            }
        }
        else{
            alert("Emter your valid Phone Number");
        }

    })