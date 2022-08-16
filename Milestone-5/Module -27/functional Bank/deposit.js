
document.getElementById('btn-deposit').addEventListener('click', function () {

    /* 
    1. get the element by ID 
    2. get the value from the element 
    3. convert string value to number
    

    */

    const newDepositAmount = getInputValueById('deposit-field')

    /* 
   1. get previous deposit total by id
   
   */

    const previousDepositTotal = getTextElementById('deposit-total');


    /// Calculate new Deposit Total 

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    //set deposit total value 

    setTextElementValueById('deposit-total', newDepositTotal);

    // /get previous balance by using function

    const previousBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);

})

