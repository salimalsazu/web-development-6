
//Step -1 add evnet listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step -2 get the deposit amount from the deposit input field
    // For input field use.value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositAmount);


    //step-3 get the current deposit total 
    //for non-input (element other that input, text area) use inner text to get the text;
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-4: add numbers to the total deposit 
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    //set the Deposit total
    depositTotalElement.innerText = currentDepositAmount;

    // setp-5: get the balance current total 

    const balanceTotalElement = document.getElementById('balance-total');
    const previuosBalanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previuosBalanceTotalString);


    // step-6 calculate current total balance
    const currentBalanceTotal = previousBlanceTotal + newDepositAmount;
    //set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step-7 clear the deposit value
    depositField.value = "";

})