// function bringSingara(money) {
//     console.log('mama singara den');
//     console.log(money);
// }

// bringSingara(250);

function bringSingara(money) {
    console.log('eto taka disen:', money);
    console.log('ai nen singara');
}

bringSingara(100);

////////// Another with var

function bringSingara(money) {
    console.log('eto taka disen:', money);
    console.log('ai nen singara');
}

var taka = 120;

bringSingara(taka);


//////another


function bringSingara(money) {
    console.log('eto taka disen:', money);
    console.log('ai nen singara');
}

var taka = 120;

function add(num1, num2) {
    console.log('going to add:', num1, num2);
}
add(12, 12);


function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(20, 25, 35, 45, 50);
