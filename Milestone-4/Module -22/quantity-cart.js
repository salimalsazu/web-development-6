const shoppingCart = [
    { name: 'belt', price: 1200, quantity: 2 },
    { name: 'shoe', price: 1200, quantity: 15 },
    { name: 'shirt', price: 1200, quantity: 10 },
    { name: 'pant', price: 1200, quantity: 8 },

]

function totalCost(products) {
    let sumCart = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sumCart = sumCart + productTotal;
        // console.log(product);
    }
    return sumCart;
}

const expense = totalCost(shoppingCart);
console.log('Total expense today:', expense);