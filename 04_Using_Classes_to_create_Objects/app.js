"use strict";
// class
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
// Inheritance 継承
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
// Static Properties & Methods
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14;
console.log(2 * Helpers.PI); // 6.28 と表示
console.log(Helpers.calcCircumference(10)); // 31.400000000000002 と表示
// Abstract Classes 抽象クラス
class Project {
    constructor() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name) {
        this.projectName = name;
    }
}
let newProject = new ITProject();
console.log(newProject); // ITProject { projectName: 'Default', budget: 1000 } と表示
newProject.changeName('Super IT Project');
console.log(newProject); // ITProject { projectName: 'Super IT Project', budget: 1000 } と表示
// private constructors
class OnlyOne {
    // コンストラクタはプライベートだけどnameはpublicなので,
    // 外部からnameにアクセスできる.
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name); // The Only One と表示
right.name = 'Something else';
console.log(right.name); // Something else と表示
