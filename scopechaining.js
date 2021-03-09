// scopechaining is a concept that deefines how variables will be accessed if they are defined in different scopes 
// As if a var is not defined but is used in the code then the code will search for its occurance only where it is globaly
// available or is available with the parent but not the child
var name = "Hitesh";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. H";
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. HC";
    console.log("Line number 12", name);
  }
}

sayName();
