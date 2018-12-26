"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
        this.type = 'test';
        this.age = 27;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType('Old Guy');
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person('sola', 'Sola');
console.log(person.name, person.username); // sola Sola と表示
person.printAge();
// person.setType('Cool guy'); // setTypeメソッドがprivateのため使えない
