"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// loggedがPersonを包み込む.
function logged(constructorFn) {
    console.log(constructorFn); // [Function: Person] と表示
}
let Person = class Person {
    constructor() {
        console.log('Hi!');
    }
};
Person = __decorate([
    logged
], Person);
// Decorator Factories
function logging(value) {
    return value ? logged : null; // [Function: Car] と表示
    // tsc実行時にエラーが出るけど[Function: Car]と表示されます.
}
let Car = class Car {
};
Car = __decorate([
    logging(true)
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
    printable
], Plant);
const plant = new Plant();
plant.print(); // Plant { name: 'Green Plant' } と表示
