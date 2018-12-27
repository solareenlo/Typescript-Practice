"use strict";
class Person {
    constructor(name, username) {
        this.username = username;
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
console.log(person); // Person { username: 'Sola', age: 27, name: 'sola' } と表示
console.log(person.name, person.username); // sola Sola と表示
person.printAge(); // 27 Old Guy を表示
// person.setType('Cool guy'); // setTypeメソッドがprivateのため使えない
// Inheritance
class Sola extends Person {
    // name = 'SOLA';
    constructor(username) {
        super('Sola', username);
        this.age = 32;
    }
}
const sola = new Sola('Taro');
console.log(sola); // Sola { username: 'Taro', age: 32, name: 'SOLA' } と表示
// Getters & Setters
class Plant {
    constructor() {
        this._species = 'Default';
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = 'Default';
        }
    }
}
let plant = new Plant();
console.log(plant.species); // Default と表示
plant.species = 'AB';
console.log(plant.species); // Default と表示
plant.species = 'Green Plant';
console.log(plant.species); // Green Plant と表示
