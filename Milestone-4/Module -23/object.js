const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movide cinema',
    isSingle: true,
    friends: ['Apu', 'Raaz', 'Salman', 'Amir'],
    movies: [{ name: 'no-1', year: 2015 }, { name: 'king khan', year: 2018 }],
    act: function () {
        console.log('acting likje sakib khan')
    },
    car: {
        brand: 'tesla',
        price: 500000,
        made: 2025,
        manfacturer: {
            name: 'tesla',
            cer: 'Elon Mask',
            country: 'usa'
        }
    }
}

// console.log(nayok);

nayok.act()
console.log(nayok.act);