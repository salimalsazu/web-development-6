var myComputer = {
    brand: 'hp',
    price: 40000,
    color: 'silver',
    proccessor: 'i7'
}

console.log(myComputer.price);


function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 200;
var fastFood = bringSingara(myTaka);
console.log('total singara:', fastFood);