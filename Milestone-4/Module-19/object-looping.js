//Array vs Object


var shoppingItems = ['books', 'sunglass', 'shoes', 'pen']

var friendAge = [12, 45, 78, 12, 32, 14]

var friendAge = {
    rahim: 12,
    samd: 45,
    karim: 78,
    jamal: 12
}


var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25,
    shoe: 5,
    bottle: 3
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);


// var keys = ['books', 'sunglass', 'keyborad', 'mouse', 'pen', 'shoe', 'bottle']

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}


///for loop

for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);

}