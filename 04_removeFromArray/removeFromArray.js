const removeFromArray = function(array, ...args) {
    let new_array = array.filter(num => !args.includes(num))
    
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
