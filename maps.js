var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

for (let key of myMap.keys()) {
  console.log(`Key is ${key}`);
}

for (let value of myMap.values()) {
  console.log(`Value is ${value}`);
}
// when we use for of key is printed first but 
// if we sue for each value will be displayed first no matter how ypu put in code
// you can try this be playing with the code 
for (let [key, value] of myMap) {
  console.log(`Key is : ${key} and Value is ${value}`);
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`));
myMap.forEach((v) => console.log(`${v}`));
myMap.forEach((k) => console.log(`key is ${k}`));
// the code pn line 26 is asking for key but because of for each function value is getting printed
myMap.delete(2);
console.log(myMap);
