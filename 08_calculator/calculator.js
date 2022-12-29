const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(array) {
  const sumarray = array.reduce((total,currentVal) => total += currentVal,0)
  return sumarray;
};

const multiply = function(array) {
  const multiplyarray = array.reduce((total,currentVal) => total *= currentVal,1)

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
