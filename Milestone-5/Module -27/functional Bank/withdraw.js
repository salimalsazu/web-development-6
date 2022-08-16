/* 
1. add withdraw button event handler

2. get withdraw amont by usng get getInputValueID function 

3. get previous withdraw amount by using getTextElementById function 

4. calculate new withdraw Total ans set the value 

4.5 se new withdraw total by using  

5. get previous balance total by using get setTextElementValueById function 

6. calculate new balance total 
7. set balance total by using setTextElementValueById 

*/


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previouBalanceTotal = getTextElementById('balance-total');
    const newBalanceTotal = previouBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})