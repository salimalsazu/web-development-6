const numbers = [45, 65, 23, 98, 19]

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }


//new vsrion of JS =======> for of Loop
// for (const number of numbers) {
//     console.log(number);
// }


const products = [
    { id: 1235, name: 'walton phone', price: 12000 },
    { id: 564, name: 'iphone phone', price: 12000 },
    { id: 12035, name: 'walton phone', price: 12000 },
    { id: 15, name: 'MI phone', price: 12000 },
    { id: 15435, name: 'Apple phone', price: 12000 },
    { id: 12535, name: 'Pixel phone', price: 12000 },
    { id: 127835, name: 'HP laptop', price: 12000 }

];

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
    return matched;
}

const result = matchedProducts(products, "laptop");

console.log(result);



