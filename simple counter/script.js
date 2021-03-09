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
}, 1500);