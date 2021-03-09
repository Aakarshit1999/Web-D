const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];
// forof is used to iterate through an array without any intial condition
for (const n of names) {
  console.log(n);
}
// forEach loop iterates through all the values in the array
names.forEach((names) => (console.log(names)));
const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};
// forin is similar to forof the only difference is that it is used for objects

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
