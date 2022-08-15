/*
1. add evnet handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 also make sure to convert the input a number by useing parseFloat 
3. get prevoius withdraw total 
4. calculate total withdraw amount 
4.5 set the total withdraw
5. get the prevoius total
6. calulate new balance total 
6.5 se the new balance total 
 */

//step 1

document.getElementById('btn-withdraw').addEventListener('click', function () {
    //  step 2
    const widthdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = widthdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevoiusWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(prevoiusWithdrawTotalString);





    // step-5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7 clear the input field
    widthdrawField.value = "";


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Withdraw amount exced the balance amount');
        return;
    }

    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;




    // step-7 clear the input field
    widthdrawField.value = "";

})