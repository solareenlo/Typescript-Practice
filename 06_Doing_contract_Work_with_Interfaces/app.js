"use strict";
function greet(person) {
    console.log("Hello, " + person.name + ".");
}
function changeName(person) {
    person.name = 'Taro';
}
var person = {
    name: 'sola',
    age: 27,
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName + ".");
    }
};
greet(person); // Hello, sola. と表示
changeName(person);
greet(person); // Hello, Taro. と表示
// greet({name: 'sola', age: 27}); // Hello, sola. と表示
person.greet('Yamada'); // Hi, I am Taro Yamada. と表示
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName + ".");
    };
    return Person;
}());
var myPerson = new Person();
myPerson.name = 'solasola';
myPerson.lastName = 'Anything';
greet(myPerson); // Hello, solasola. と表示
myPerson.greet(myPerson.lastName); // Hi, I am solasola Anything. と表示
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(4, 10)); // 28 と表示
var oldPerson = {
    age: 30,
    name: 'sola',
    greet: function (lastName) {
        console.log('Hello!');
    }
};
console.log(oldPerson); // { age: 30, name: 'sola', greet: [Function: greet] } と表示
