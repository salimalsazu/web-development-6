const names = ["abul;", 'babul', 'chabul', 'Dabul', 'ebul', 'kabul', 'babul', 'chabul', 'tabul']

function removeDuplicate(name) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }

    } return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);

