class Person {
  constructor(name = 'Anonymous', age = 0){
    //Inside of class methods 'this'
    //refers to the class instance
    this.name = name;
    this.age = age;
  }
  //The methods our available to us in the
  //individuals instances of our class
  getGreeting(){
    return `Hi I am ${this.name}!`;
  }
  getDescription(){
    return `I am ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major){
    //First we need to call the parent constructor with super
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    /**
     * Hack 📌📌📌
     *
     * A string which has content is a truthy value wheter an empty string
     * is a falsy value.
     * !truthy = false
     * !!truty = !false = true
     *
     * !falsy = true
     * !!falsy = !true = false
     * If the student has a major, that return a populated string, so !!this.major is equal to
     * true. If the student doesnt have a major, !!this.major is false.
    */
    return !!this.major;
  }
  //Override a method
  getDescription(){
    let description = super.getDescription();
    if (this.hasMajor()){
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(this.homeLocation){
      greeting += `I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }

}



const me = new Traveler('Jane', 20, 'New York');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());


