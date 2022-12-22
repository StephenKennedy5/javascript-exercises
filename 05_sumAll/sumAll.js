const sumAll = function(num1,num2) {
    let sumval = 0

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (num1.length > 1 || num2.length > 1) {
        return "ERROR";
    } else if (num1.type === "string" || num2.type === "string") {
        return "ERROR";
    }



    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            sumval += i;
        }
    } else {
        for (let i = num1; i <= num2; i++) {
            sumval += i;
        }
    }
    return sumval
};

// Do not edit below this line
module.exports = sumAll;
