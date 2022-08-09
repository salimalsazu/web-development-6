const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = num1 - num2;

if (gap < 5) {
    console.log('you guys can be frineds')
} else {
    console.log('You stay away from me')
}

//=------

// Math ni ja jantey hobey

const number = 2.51;
const fullNumber = Math.round(number);
console.log(fullNumber);

const number1 = 2.49;
const fullNumber1 = Math.round(number1);
console.log(fullNumber1);

const math2 = Math.ceil(2.0001);
console.log(math2);

const math3 = Math.floor(2.0001);
console.log(math3);

const math4 = Math.round(Math.random() * 100);
console.log(math4);

for (let i = 0; i < 20; i++) {
    const math6 = Math.round(Math.random() * 6);
    console.log(math6);
}