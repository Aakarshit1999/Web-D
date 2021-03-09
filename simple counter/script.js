<<<<<<< HEAD
var counter = document.querySelector(".counter")
var follower = document.querySelector(".followers")
let count =1;
setInterval(() => {
    if(count < 1000){
        count=count+3;
        counter.innerText = count;
    }
}, 0.1);
setTimeout(() => {
    follower.innerText = "followers on instagram";
=======
var counter = document.querySelector(".counter")
var follower = document.querySelector(".followers")
let count =1;
setInterval(() => {
    if(count < 1000){
        count=count+3;
        counter.innerText = count;
    }
}, 0.1);
setTimeout(() => {
    follower.innerText = "followers on instagram";
>>>>>>> de2270bc2d0f98b924b529c2760419c30187f1a3
}, 1500);