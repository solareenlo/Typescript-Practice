"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
        this.name = name;
    }
}
const person = new Person('sola', 'Sola');
console.log(person.name, person.username);
