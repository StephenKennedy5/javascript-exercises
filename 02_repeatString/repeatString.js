const repeatString = function(string,num) {
    let new_string = ''
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        new_string += string
    } 
    return new_string;
};

// Do not edit below this line
module.exports = repeatString;
