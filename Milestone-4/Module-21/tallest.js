// function maxinArray(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[index];
//         if (element > largest) {
//             largest = element;
//         }

//     } return largest;

// }

// const height = [167, 190, 120, 165, 137];
// const tallest = maxinArray(height);
// console.log('Tallest Number is', tallest)

function mininArray(numbers1) {
    let smallest = numbers1[0];
    for (let i = 1; i < numbers1.length; i++) {
        const index = i;
        const element = numbers1[index];
        if (element < smallest) {
            smallest = element;
        }

    } return smallest;

}
const height = [167, 190, 120, 165, 137];
const smallest = mininArray(height);
console.log('Smallest Number is', smallest);

