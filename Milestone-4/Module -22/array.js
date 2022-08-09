const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name: 'Agun'
}
const friend = [13, 14, 11, 21, 16, 15, 20]

function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friend)); // for check array using this method
console.log(typeof add);

console.log(friend.includes(14));
console.log(friend.includes(25));

if (friend.indexOf(13) !== -1) {
    console.log('found')
} else (
    console.log('error')
)

const newFrinedAge = [12, 13, 14, 15, 18]
const allFrineds = newFrinedAge.concat(friend);
console.log(allFrineds);