// fill is used to replace the values of the array with the given value 
// and filter fikters the value according to our needs and requirements 
var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill("empty"));

const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((num) => num > 55);

console.log(result);

// slice is used to cut a portion the array and represent in the form in the form of an array 
// whereas the splice is used to count the elements we wish to delete and and can also replace them by as many elements as we want or even just delete them 

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1,3));
// console.log(users.slice(users.length -3, -1));
users.splice(1, 3, "HI", "BYE", "bliss", "run", "rob");
// users.splice(1,3)
console.log(users);
// console.table(users);