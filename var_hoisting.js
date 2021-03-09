tipper("80");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}
// If we define a function it becomes globaly available hence we are also able to access it even before the function is defined as the javascript will know that this function has been created afterwards as it is available globaly
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200");
// If we define a function a function form of var then it is not possible to access it before as it is declared and made undefined
//This below given code will show that
// 1: A function is defined and made globally available
// 2: A variable is declared and made undefined
console.log(name);
var name = "hitesh";
sayName();
function sayName() {
  var name = "MR. H";
  console.log(name);
}


console.log(name);
