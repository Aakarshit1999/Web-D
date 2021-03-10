class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  CourseList() {
    return this.#courseList;
  }

  login() {
    return "You are logged in";
  }
}

class SubAdmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return "I am subadmin";
  }
  login() {
    return "login for admin only";
  }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.courseList); // this became undefined because course list was made private
console.log(rock.CourseList());// this works fine because it is a getter function as it is returning a value that was accessing the private object
const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());
