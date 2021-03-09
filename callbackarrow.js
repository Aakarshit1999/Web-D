var isEven = (element) => {
    if (element % 2 === 0) {
      return true;
    }
    return false;
// the below line will perform the same function as perfore=med by the above code 
  // return element % 2 === 0;
};

console.log(isEven(2));
// using callback feature 
var result = [2, 3, 6, 8].every(isEven);
console.log(result);
// using both callback and arrow
var result = [2, 4, 6, 8].every((e) => (e % 2 === 0));
console.log(result);
