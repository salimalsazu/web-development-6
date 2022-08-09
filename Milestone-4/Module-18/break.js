// for (var i = 1; i <= 20; i++) {
//     console.log(i);
//     if (i > 10) {
//         break;
//     }
// }


// var roastGiven = 0;

// while (roastGiven < 10) {
//     console.log('Ami khabo')
//     roastGiven++;
//     if (roastGiven < 4) {
//         break;
//     }
// }

// var code = [91, 92, 93, 94, 95, 96, 97, 98, 99,];

// for (var i = 0; i < code.length; i++) {

//     if (code[i] >= 95) {
//         break;
//     }
//     console.log(code[i]);
// };


// var code = [91, 92, 93, 94, 95, 96, 97, 98, 99,];

// for (var i = 0; i < 9; i++) {

//     if (i > 5) {
//         break;
//     }
//     console.log(i);
// };


// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'book'];
// for (i = 0; i < items.length; i++) {
//     var item = items[i];
//     if (item == 'pen') {
//         break;
//     }
//     console.log(item);
// }



var items = ['pen', 'book', 'magazine', 'calender', 'table'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'calender') {
        break;
    }
    console.log(item);
}

var items = ['pen', 'book', 'magazine', 'calender', 'table'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'calender') {
        continue;
    }
    console.log(item);
}