class Person {
  constructor(name = 'Anonymous', age = 'unknown') {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I'm ${this.name}!`;
  }
  getDescription() {
    return ` ${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major = 'undecided') {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description = description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, location) {
    super(name);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    greeting = `Hi I'm ${this.name}. I'm vising from ${this.location}`;

    return greeting;
  }
}

const me = new Traveller('Andrew Mead', 'Philli');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
