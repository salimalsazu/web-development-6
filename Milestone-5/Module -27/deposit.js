/* 

1. add event listener to the deposit button
2. get deposit ammount from yhr deposit input field
3.Convert string deposit amount to a number type
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total 
6. get current Balance total 
7. calculate the new balance and set it to the balance total element
*/

// step-1 
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step -3
    depositField.value = "";


    // ste-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-5

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-6 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // step -7

    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})