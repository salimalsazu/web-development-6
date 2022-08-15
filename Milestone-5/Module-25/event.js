
//  <!-- option 1 -->
//  <button onclick="document.body.style.backgroundColor='Yellow'">Make Yellow</button>


///option 2 add onClick function 

function makeRed() {
    document.body.style.backgroundColor = 'red'; // We will use this
}


// option 3

const makeBluButton = document.getElementById('make-blue');

makeBluButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



///option -3 another

const purpleButton = document.getElementById('make-purple')

purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option 4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 another

const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click',
    function makeGreen() {
        document.body.style.backgroundColor = 'green';
    }

)

// option 4 final

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})  // We will use this some time 
