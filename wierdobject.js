var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is : ${this.name}`);
  },
};

var Aakarshit = Object.create(User);
console.log(Aakarshit);
Aakarshit.name = "Aaakarshit Pandey";
Aakarshit.getUserName();

var sam = Object.create(User, {
  name: { value: "sammy" },
  courseCount: { value: 3 },
});

sam.getUserName();
