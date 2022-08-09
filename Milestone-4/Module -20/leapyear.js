function isLeapYear(year) {
    const reminder = year % 4;
    if (reminder === 0 && reminder != 0 % 100 || reminder === 0 % 400) {
        return true;
    } else {
        return false;
    }
}

const isMyLeapYear = isLeapYear(1933);
console.log(isMyLeapYear);


const isHerLeapYear = isLeapYear(1936);
console.log(isHerLeapYear);

