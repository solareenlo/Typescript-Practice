"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// loggedがPersonを包み込む.
function logged(constructorFn) {
    console.log(constructorFn);
}
let Person = class Person {
    constructor() {
        console.log('Hi!');
    }
};
Person = __decorate([
    logged // [Function: Person] と表示
], Person);
// Decorator Factories
function logging(value) {
    return value ? logged : null;
}
let Car = 
// tsc実行時にエラーが出るけど[Function: Car]と表示されます.
class Car {
};
Car = __decorate([
    logging(true) // [Function: Car] と表示
    // tsc実行時にエラーが出るけど[Function: Car]と表示されます.
], Car);
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
let Plant = class Plant {
    constructor() {
        this.name = 'Green Plant';
    }
};
Plant = __decorate([
    logging(true) // [Function: Plant] と表示
    ,
    printable // Plant { name: 'Green Plant' } と表示
], Plant);
const plant = new Plant();
plant.print();
// Method Decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
class Project {
    constructor(name) {
        this.projectName = name;
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    editable(true)
], Project.prototype, "calcBudget", null);
const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = () => console.log(2000);
project.calcBudget();
