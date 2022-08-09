// const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87]

// const partial = friends.slice(2, 5);
// console.log(partial);

//Removes elements from n array

// and if necessary , inserts new elements in thier place

// returning the deleted elements

// will change the original arrat


// const friendss = [12, 45, 32, 22, 44, 62, 29, 69, 87]
// const partialed = friendss.splice(2, 5)
// console.log(partialed);


const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partiales = friends.splice(2, 5, 99, 55, 777);
console.log(partiales);
console.log(friends);