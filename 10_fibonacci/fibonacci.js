const fibonacci = function(num) {
    
    var a = 1, b = 0, temp;

    if (num < 0) {
        return 'OOPS'
    }

    while (num > 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b

};

// Do not edit below this line
module.exports = fibonacci;
