var isGraduated = true;

var salary = 60000;

var cars = 1;

if (isGraduated === true && salary > 50000 && cars >= 1) {
    console.log('bidesh choley jaboo');
} else {
    console.log('kopale bidesh jawa nai');
}

if ((isGraduated === true && salary > 50000) || cars >= 1) {
    console.log('bidesh choley jaboo');
} else {
    console.log('kopale bidesh jawa nai');
}
