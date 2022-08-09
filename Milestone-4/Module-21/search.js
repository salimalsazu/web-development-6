const lyrics = 'tumi bondu kala pakhi ami jenoi ki. bosonoto kalet tomai boltey pari ni. sada sada kala kala';

const searchString = 'pakhi';
const searchStringLower = searchString.toLowerCase();

/// kuinu kis khujtey galey . eta case sensitive 

const lyricsLowercase = lyrics.toLowerCase();
const doesExist = lyricsLowercase.includes(searchStringLower); /// kuinu kis khujtey galey . eta case sensitive 
console.log(doesExist);

///ek line kortey holey

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExistOneLine);


/////--------------------

// indexOf

console.log(lyrics.indexOf('ami'));


if (lyrics.indexOf('sada') !== -1) {
    console.log('exist inside the string')
} else {
    console.log('cant find')
}

//Starts with: 
console.log(lyrics.startsWith('tumi'))

//endswith

const filename = 'my_Bio_Data.pdf';
const otherFile = 'mypic.png';

console.log(filename.endsWith('.pdf'));
