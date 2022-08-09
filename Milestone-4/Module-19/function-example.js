/* function functionName(perametrs){
    //function body 
    //return
}

var returnValue = functionName(perametrs); */


function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marsk = 58;
const assignment3Marks = 60;

var myAverage = getAverage(assignment1Marks, assignment2Marsk, assignment3Marks);

console.log('My average assignemnet Mark:', myAverage);


//////////


function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 13);
const result2 = add(35, 7);

const finalResult = add(result1, result2);

