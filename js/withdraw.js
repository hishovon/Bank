document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField=document.getElementById('withdraw-field');
const newWithdrawAmountString= withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);


const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);


const currentTotal = document.getElementById("balance-total");
const currentBalanceTotalString=currentTotal.innerText;
const currentBalanceTotal=parseFloat(currentBalanceTotalString);

withdrawField.value="";
if(newWithdrawAmount>currentBalanceTotal){
    alert('Enter a valid number');
    return;
}

const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal;



const finalBalance= currentBalanceTotal - newWithdrawAmount;

currentTotal.innerText=finalBalance;








})