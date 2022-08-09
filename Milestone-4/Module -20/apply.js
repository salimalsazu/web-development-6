///1. variable 
var myName = 'Khan';

// math operation: + , - , *, / 

// shorthand: +=, --, *= , /= 

//++, --

//2. Array 

var friends = ['Shakib', 'Mushfiq', 'Riyad', 'Tamim', 'Mashrafee']

///3rd element 

var players = friends[3];
console.log(players);

friends[1] = "aynaman"
console.log(friends);

///3. Conditional 
// >, <, <=, >=, ==, ===, !==, /
if (friends.length < 2) {
    console.log('fokira tot kunoi gf nai')
} else {
    console.log('anar gf asey')
}

///4. loop 

var number = 0;
while (number <= 6) {
    console.log(number);
    number++;
}

for (var i = 0; i <= 10; i++) {

}


//5. Function 

function isMoonUp(time) {
    if (time > 9) {
        return ("gf bashay ashbey")
    }
}


///6. Object 

///gf ke i phone disi nejer blood sale korey 

var gf = {
    phone: 'Iphone',
    model: "13pro Max",
    price: 130000,
    happy: 'true'
}

console.log(gf);

/// 7. let & const 

let girlFriend = "samira";
girlFriend = "sunehra";
console.log(girlFriend);

//gf change kora jay tail let use kortey parbooo

const money = 5000;
// money = 10000; ////// const change kora jay na ; 

console.log(money);


///const let same name dia varibale dec kora jay na.  but var dia kora jay