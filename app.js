const loginBtn = document.getElementById("login");
const addeposit = document.getElementById("deposit");


loginBtn.addEventListener("click", function (params) {
   const loginArea = document.getElementById("login-area");
   loginArea.style.display="none";
   const trans = document.getElementById("tran");
   trans.style.display = "block";
})

addeposit.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber ;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    

    updateSpanText("currentDeposit", depositNumber);

    updateSpanText("current", depositNumber);
          
    document.getElementById("depositAmount").value="";
    

})

const addwithdraw = document.getElementById("withdraw");

addwithdraw.addEventListener("click", function () {

 const withdrawNumber = getInputNumber("withdrawAmout");

 updateSpanText("currentWithdraw", withdrawNumber);

 updateSpanText("current", -1 * withdrawNumber);

 document.getElementById("withdrawAmout").value="";
  
})

function getInputNumber(id) {
    const withdrawAmout = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmout);

    return withdrawNumber;
  
}



function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const balance = depositNumber + currentNumber;

    document.getElementById(id).innerText = balance;
}