function numbers() {
    const number1 = 25;
    const number2 = 30;
    const number3 = 40;

    const result = number1 * number2 * number3;

    return result;

}


console.log(numbers());


const highestNumber = [10, 35, 25, 45, 56, 99, 105, 8, 20, 29];

console.log(Math.max(...highestNumber));


// const jim = 84;
// const dela = 75;
// if (jim > dela) {
//     console.log('jim will get the code');
// } else {
//     console.log('Dela will get the code');
// }


const jim = 84;
const dela = 99;
const chinku = 77;

if (jim > dela && jim > chinku) {
    console.log('Jim will get the code');
} else if (dela > jim && dela > chinku) {
    console.log('dela will get the cake')
} else {
    console.log('Chinku will get the code');
}


console.log(Math.max(12, 45));

