const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 1200 },
    { name: 'pant', price: 1200 },
    { name: 'belt', price: 1200 }

]


function totalCost(products) {
    let sumCart = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sumCart = sumCart + product.price;
        console.log(product);
    }
    return sumCart;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);