const add = function(x, y) {
	return x + y;``
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let res = 0;
  for (x of arr) res += x;
  return res;``
};

const multiply = function(...args) {
  let res = 1;
  for (x of args) res *= x;
  return res;
};

const power = function(x, y) {
	let res = 1;
  for (let i = 0; i < y; i++) res *= x;
  return res;
};

const factorial = function(x) {
	let res = 1;
  while (x > 0) {
    res *= x;
    x--;
  }
  return res;
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
