const color = 'yellow';

if (color === 'green') {
    console.log('You are a green color');
} else if (color === 'blue') {
    console.log('you are a blue');
} else if (color === 'red') {
    console.log('you are red');
} else if (color === 'yellow') {
    console.log('you are a yellow');
} else if (color === 'black') {
    console.log('you are black');
} else {
    console.log('error');
}

/// switch 

switch (color) {
    case 'green':
        console.log('you are green');
        break;
    case 'blue':
        console.log('you are BLUE');
        break;
    case 'black':
        console.log('you are black');
        break;
    case 'yellow':
        console.log('you are yellow');
        break;
    case 'white':
        console.log('you are white');
        break;
    default:
        console.log('default');

}


