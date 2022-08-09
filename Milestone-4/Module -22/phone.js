const phones = [

    { name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'walton', camera: 12, storage: '32gb', price: 28000, color: 'silver' },
    { name: 'MI', camera: 12, storage: '32gb', price: 16000, color: 'silver' },
    { name: 'Oppo', camera: 12, storage: '32gb', price: 26500, color: 'silver' },
    { name: 'Apple', camera: 12, storage: '32gb', price: 56000, color: 'silver' },
    { name: 'pixel', camera: 12, storage: '32gb', price: 46000, color: 'silver' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 26000, color: 'silver' }
]

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const mobile = phones[i];
        if (mobile.price < cheapest.price) {
            cheapest = mobile;
        }
    }
    return cheapest;

}

const mySelection = cheapestPhone(phones);
console.log(mySelection);

