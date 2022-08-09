let first = 5;
let second = 7;
console.log(first, second);

// Wrong Approch

first = second;
second = first;



// approch 1: 
const temp = first;
first = second;
second = temp;
console.log(first, second);


// approch 2 --- Destructuring

[first, second] = [second, first];
console.log(first, second);

function numbers() {
    const number1 = 25;
    const number2 = 30;
    const number3 = 40;

    const result = number1 * number2 * number3;

    return result;

}

numbers();