document.getElementById('btn-withdraw').addEventListener('click',function(){

const withdrawField=document.getElementById('withdraw-field');
const newWithdrawAmountString= withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);

const withdrawTotalElement=document.getElementById('withdraw-total');
const previousWithdrawTotalString=withdrawTotalElement.innerText;
const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
const currentWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;

withdrawTotalElement.innerText=currentWithdrawTotal;

const currentTotal = document.getElementById("balance-total");
const currentBalanceTotalString=currentTotal.innerText;
const currentBalanceTotal=parseFloat(currentBalanceTotalString);
const finalBalance= currentBalanceTotal - newWithdrawAmount;

currentTotal.innerText=finalBalance;


withdrawField.value="";













})