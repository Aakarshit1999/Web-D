var returnedValue = Math.max(2, 5, 7, 4, 2, 8);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj);

function sumOne(a, b) {
  return a + b;
}

var myA = [5, 4];
console.log(sumOne(...myA)); // spread Op (This seperates out the bunches of array objects and many other things)

function sumTwo(a, b, ...args) { // rest op (This bunches the individual values and puts them in an array)
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return [sum, multi];
}

console.log(sumTwo(2, 3, 1, 1, 1));
