var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyborad: 5,
    mouse: 1,
    pen: 25
}
///whe you know the property Name, use dot notation to get the property value.
var penCount = shoppingCart.pen;
console.log(penCount);

///alternative system

var penCount2 = shoppingCart['pen'];
console.log(penCount2);


var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
console.log(propertyName, propertyValue);


var properties = Object.keys(shoppingCart);

var propertValue = Object.values(shoppingCart);

console.log(properties);
console.log(propertValue);
console.log(shoppingCart);

//set propert values
shoppingCart.mouse = 15; // System 1
console.log(shoppingCart);
shoppingCart['mouse'] = 29; //System 2
console.log(shoppingCart);
shoppingCart[propertyName] = 100;  ///system 3
console.log(shoppingCart);