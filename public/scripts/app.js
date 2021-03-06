'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    //Inside of class methods 'this'
    //refers to the class instance
    this.name = name;
    this.age = age;
  }
  //The methods our available to us in the
  //individuals instances of our class


  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return 'Hi I am ' + this.name + '!';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return 'I am ' + this.age + ' years old';
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));
    //First we need to call the parent constructor with super


    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
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

  }, {
    key: 'getDescription',
    value: function getDescription() {
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);
      if (this.hasMajor()) {
        description += ' Their major is ' + this.major;
      }
      return description;
    }
  }]);

  return Student;
}(Person);

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(name, age, homeLocation) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: 'getGreeting',
    value: function getGreeting() {
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
      if (this.homeLocation) {
        greeting += 'I am visiting from ' + this.homeLocation;
      }
      return greeting;
    }
  }]);

  return Traveler;
}(Person);

var me = new Traveler('Jane', 20, 'New York');
console.log(me.getGreeting());

var other = new Traveler();
console.log(other.getGreeting());
