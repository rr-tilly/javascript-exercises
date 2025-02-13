const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((total, num) => total + num, 0);
};

const multiply = function (a) {
  return a.reduce((product, num) => product * num)
};

const power = function (base, exp) {
  return Math.pow(base, exp)
};

const factorial = function (num) {
  if (num === 0) return 1;
  if (num < 0) return 'Error';
  let result = num;
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;

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
