class Staff {
  // this constructor is identical to that of a mentor!
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  // identical! Smells of code duplication
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Staff {
  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
    console.log("Student '" + this.name + "' is enrolled. Welcome!");
  }
}

class Mentor extends Staff {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }
  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

student1 = new Student("Howard", "Hahaha...");
student1.enroll("");