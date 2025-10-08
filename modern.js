// Traditional function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greetArrow = (name) => "Hello " + name;

console.log(greet("Soliu"));
console.log(greetArrow("DLT Africa"));

// Destructuring
// Array Destructuring
const names = ["Soliu", "David", "Grace"];
const [first, second, third] = names;
console.log(first); // Soliu
console.log(second); // David

//Object Destructuring
const student = { name: "Soliu", course: "JavaScript", level: "Cohort 7" };
const { name, course } = student;
console.log(`${name} is learning ${course}`);

// Spread Operator (...)
// Eaxmple 1 - Combine Arrays
const frontend = ["HTML", "CSS", "React"];
const backend = ["Node", "MongoDB"];
const fullstack = [...frontend, ...backend];
console.log(fullstack);

// Example 2 — Clone or Merge Objects
const user = { name: "Soliu", country: "Nigeria" };
const info = { course: "JavaScript" };
const profile = { ...user, ...info };
console.log(profile);

// 4. Template Literals (Backticks ``)
const student2 = "Soliu";
const course2 = "JavaScript";
console.log(`Hello ${student2}, welcome to your ${course2} class at DLT Africa!`);


// Classes
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, learning ${this.course} at DLT Africa!`);
  }
}

const soliu = new Student("Soliu", "JavaScript");
soliu.introduce();
