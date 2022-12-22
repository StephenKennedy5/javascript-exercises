const palindromes = function (string) {
    let newstring = string.replace(/\W/g, '').toLowerCase();
    let reversestring = '';
    for (let i = newstring.length-1; i >= 0; i--) {
        reversestring += newstring[i]
    }

    return newstring === reversestring;
};

// Do not edit below this line
module.exports = palindromes;
