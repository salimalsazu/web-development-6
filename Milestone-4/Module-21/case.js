const userName = 'blackpink';
const userInput = 'blackPink';

if (userName.toLocaleLowerCase === userInput.toLocaleLowerCase) {
    console.log('valid user')
} else {
    console.log('Invalid user')
}