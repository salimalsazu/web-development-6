// function getSumOfAnArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];

// getSumOfAnArray(myNumbers);


// function getOddNumberOfAnArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 === 0) {
//             console.log(index, element);
//         }

//     }
// }


// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getOddNumberOfAnArray(myNumbers);


// function getOddNumberOfAnArray(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element % 2 !== 0) {
//             console.log(index, element);
//         }

//     }
// }


// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
// getOddNumberOfAnArray(myNumbers);


function getOddNumberOfAnArray(numbers) {
    const OddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            OddNumbers.push(element);
        }

    } return OddNumbers;
}


const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);