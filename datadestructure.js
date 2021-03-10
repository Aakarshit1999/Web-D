// Destructuring of data is not only possible on objects but on arrays as well
// The only thing to remember is that the name of objects remain same while destructuring using objects whereas 
// it is not necessary to do that in array as they work in a different way but it is recommended to do the same everywhere

const user = ["Aakarshit", 3, "admin"];
var role = user[2];
var name = user[0];

var [name, courseCount, role] = user;

console.log(role);

const MyUser = {
  Name: "Aakarshit",
  CourseCount: 5,
  Role: "admin",
};

console.log(MyUser.CourseCount);

const { Name, CourseCount, Role } = MyUser;
console.log(Role);
