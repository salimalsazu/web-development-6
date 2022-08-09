/// 1st Problem

var fruits = ['Apple', 'Banana', 'Orange'];

var position = fruits.indexOf("Banana");
console.log(position);

fruits[1] = 'Mango'
console.log(fruits);
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);


/// 2d Problem

var me = 35;
var Tom = 66;
var Jane = 95;
var peter = 56;
var john = 40;


if (me >= 80) {
    console.log("Result is A grade");
} else if (me >= 60) {
    console.log("result is B grade");
} else if (me >= 50) {
    console.log("result is C grade");
} else if (me >= 40) {
    console.log("result is D grade");
} else {
    console.log("result is F grade");
}

// same for others just change the name. 

// prob -3

var a = 13;
var b = 79;
var c = 45;

if (a > b) {
    console.log("statment is false");
} else if (a > c) {
    console.log(" 2nd statment is false");
} else if (c == b) {
    console.log(" 3rd statment is false");
} else if (c < a) {
    console.log(" 4thstatment is false");
} else if (b > c) {
    console.log("79 is largest number")
} else {
    console.log("Thanks for your best try")
}


//////4t Problem

var signal = "green";

if (signal == "red") {
    console.log("Dont Move its red signal")
} else if (signal == "yelow") {
    console.log("Wait for a greean signal");
} else if (signal == "green") {
    console.log("hurrey, you ca go now")
} else {
    console.log("Thanks for your patient");
}
