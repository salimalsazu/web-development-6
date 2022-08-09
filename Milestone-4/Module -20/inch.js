const myInches = 12;
const myFeet = myInches / 12;

console.log(myFeet);


const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dada feet', dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log('dadai feet', dadiFeet);

function inchtofeet(inches) {
    const feet = inches / 12;
    return feet;
}

const dadainches1 = 144;
const dadafeet = inchtofeet(dadainches1);
console.log('dadafeet', dadaFeet);

const nanainches = 168;
const nanafeet = inchtofeet(nanainches);
console.log('nana feet', nanafeet)

function milesToKilo(miles) {
    const kiloMiles = miles * 1.609;
    return kiloMiles;

}

const miles = 100;
const cal = milesToKilo(miles);
console.log("Total kilometers:", cal);