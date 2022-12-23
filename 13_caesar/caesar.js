const caesar = function(string,shift) {
    if (shift > 26) {
        shift = shift % 26
    }
    let newstring = ''
    for (let i = 0; i < string.length; i++) {
        let tempnumber = string.charCodeAt(i)
        if (tempnumber > 64 && tempnumber < 91) {
            if (tempnumber + shift >= 91) {
                newstring += String.fromCharCode(tempnumber + shift - 26)
            } else if (tempnumber + shift <= 64) {
                newstring += String.fromCharCode(tempnumber + shift + 26)
            } else {
                newstring += String.fromCharCode(tempnumber + shift)
            }
        } else if (tempnumber > 96 && tempnumber < 123) {
            if (tempnumber + shift >= 123) {
                newstring += String.fromCharCode(tempnumber + shift - 26)
            } else if (tempnumber + shift <= 96) {
                newstring += String.fromCharCode(tempnumber + shift + 26)
            } else {
                newstring += String.fromCharCode(tempnumber + shift)
            }
        } else {
            newstring += String.fromCharCode(tempnumber)
        }
    }
    return newstring;
};

// Do not edit below this line
module.exports = caesar;
