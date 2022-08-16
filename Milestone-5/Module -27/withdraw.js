/* 
1. add event handler with the withdraw button 
2. get the withdraw amount 
3. clear the withdraw input string 
4. get previous total 
5. calculate total withdraw amount and set it to the withdraw total amount 
6. get previous balance 
7. calculate new balance and set it to the balance total element 


*/

// step-1 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step -2 
    const withdrawFiled = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);


    // step-3
    withdrawFiled.value = "";


    //Step-4


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalAmountString);

    // step-5 

    const newWithdarTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdarTotal;


    // step-6 

    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previuosBalanceTotal = parseFloat(previousBalanceTotalString);


    //step-7 

    const newBalanceTotal = previuosBalanceTotal - newWithdarTotal;
    balanceElement.innerText = newBalanceTotal;


})