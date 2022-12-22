const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
	let sumarray = 0;
  for (let i = 0; i < array.length; i++) {
    sumarray += array[i];
  }
  return sumarray;
};

const multiply = function(array) {
  let multiplyarray = 1;
  for (let i = 0; i < array.length; i++) {
    multiplyarray *= array[i]
  }
  return multiplyarray;
};

const power = function(num,exp) {
	return num**exp;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
