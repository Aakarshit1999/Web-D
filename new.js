var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
  };
  
  User.prototype.getFirstname = function () {
    console.log(`Your firstname is : ${this.firstName}`);
  };
  
  var Aakarshit = new User("Aakarshit", 2);
  Aakarshit.getCourseCount();
  
  if (Aakarshit.hasOwnProperty("firstName")) {
    Aakarshit.getFirstname();
  }
  
  console.log(Aakarshit);
  
  var Nishant= new User("Nishant", 1);
  Nishant.getCourseCount();
  Nishant.getFirstname();
  console.log(Nishant);
