"use strict";
function greet(person) {
    console.log("Hello, " + person.name + ".");
}
function changeName(person) {
    person.name = 'Taro';
}
var person = {
    name: 'sola',
    age: 27
};
greet(person); // Hello, sola. と表示
changeName(person);
greet(person); // Hello, Taro. と表示
