const lyrics = 'tumi bondu kala pakhi ami jenoi ki. bosonoto kalet tomai boltey pari ni. sada sada kala kala';

const parts = lyrics.split(' '); // proti word k alada kortey
console.log(parts);

const sentence = lyrics.split('.') /// sentence akarey bag kortey 
console.log(sentence);

const chars = lyrics.split('');  // Okkor key  akarey bag kortey
console.log(chars);


const partial = lyrics.slice(5, 10);
console.log(partial);

const partial2 = lyrics.substring(5, 10);
console.log(partial2);

const lines = ['tumi bondu kala pakhi ami jenoi ki',
    ' bosonoto kalet tomai boltey pari ni',
    ' sada sada kala kala'];


const newLines = lines.join('.');

console.log(newLines);