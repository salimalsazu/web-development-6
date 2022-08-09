//////////


// function add(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }

// const result1 = add(12, 13);
// const result2 = add(35, 7);

// const finalResult = add(result1, result2);


// function add(num1, num2) {
//     const sum = num1 + num2;
//     console.log(sum);
//     return sum;
// }

// const result1 = 25;
// const result2 = 50;


// add(result1, result2);

//// problem 2


//XYZ aanouced Flat 10% Discount on mobile Device above 1000Tk

// function xyz(mobilePrice) {
//     let mobileDiscount = 0.10;
//     let finalDiscount = mobilePrice * mobileDiscount;
//     return finalDiscount;
// }


// let mobile = 5000;
// console.log('Original Mobile Price:', mobile)

// const calculation = xyz(mobile);
// console.log('Discount Price:', calculation);

// let afterDiscountPrice = mobile - calculation;
// console.log('After Discount Original Price:', afterDiscountPrice)



//Samsung Company aanouced Flat 10% Discount on mobile Device above 1000Tk;

function samsung(mobileDevice) {
    let mobileDiscount = 0.10;

    if (mobileDevice > 10000) {
        return (finalDiscount = mobileDevice * mobileDiscount);
    } else {
        return ('not applicable');
    }

}

let mobileDevice = 19999;
console.log('Original Mobile Price:', mobileDevice);

const discountCalculation = samsung(mobileDevice);
console.log('You will get:', discountCalculation);

let AfterDiscountPrice1 = mobileDevice - discountCalculation;
console.log('After Discount Mobile Price:', AfterDiscountPrice1);