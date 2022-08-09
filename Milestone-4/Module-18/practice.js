// ////probel  -solve -1 

// var moneyGiven = 1000;
// var applePrice = 400;
// var orangePrice = 300;

// var totalPrice = applePrice + onratechange;

// var getBack = moneyGiven - totalPrice;

// console.log(getBack);


// another problem: 

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1);
    } else {
        console.log(num3);
//     }
// } else {
//     if (num2 > num3) {
        console.log(num2);
    } else {
        consolo.log(num3);
    }
}


/// Problem-3


var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    console.log('isoseles');
};

// var i = 0;
// for (i=0; i<5; i++){};
// console.log(i);

// var marks = [13, 15, 14, 20, 18];
// for (var i = 0; i < marks.length; i++) {
//     if (marks[i] >= 15) {
//         continue;
//     }
//     console.log(marks[i]);
// };


// for (var i = 0; i > 10; i++) {
//     console.log(i);
// }

// var name = 'false';

// console.log(typeof name);

// var i = 5;
// for (; i < 5; i++) {
//   console.log(i);
// }

// var i = 5;
// for (i < 5; i++) {
//     console.log(i);
// }


var problem = ['রাত ৮ টা বাজে মডিউল আনলক করো', 'ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো', 'ভিডিও দেখতে দেখতে নোটস নাও', 'মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো', 'কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো ']

for (i = 0; i < 10; i++) {
    console.log(problem[i]);
    if (problem[i] == undefined) {
        console.log(problem[i - 5]);
    } else {
        console.log(problem[i])
    }
};


var problem = ['a', 'b', 'c', 'd', 'e']

for (i = 0; i < 10; i++) {
    console.log(problem[i]);
    if (problem[i] == undefined) {
        console.log(problem[i - 5]);
    } else {
        console.log(problem[i])
    }
};