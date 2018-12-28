"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
    return function (target) {
        value ? logged : null;
    };
}
let Car = class Car {
};
Car = __decorate([
    logging(true) // [Function: Car] と表示
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
// Method Decorator 関数の書き込み許可を制御する
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
// Property Decorator プロパティの書き込み許可を制御する
function overwritable(value) {
    return function (target, propName) {
        const newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
class Project {
    constructor(name) {
        this.projectName = name; // @overwritalbe(false) だとここでエラーになる.
    }
    calcBudget() {
        console.log(1000);
    }
}
__decorate([
    overwritable(true) // falseにするとpropertyが書き込み禁止になる.
], Project.prototype, "projectName", void 0);
__decorate([
    editable(true) // ここでcalcBudgetを書き換え可能かどうかを判定する
], Project.prototype, "calcBudget", null);
const project = new Project('Super Project');
project.calcBudget(); // 1000 と表示
project.calcBudget = () => console.log(2000);
project.calcBudget(); // 2000 と表示
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
class Course {
    constructor(name) {
        this.name = name;
    }
    printStudentNumbers(mode, printAll) {
        if (printAll) {
            console.log(1000);
        }
        else {
            console.log(200);
        }
    }
}
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
const course = new Course('Super Course');
course.printStudentNumbers('anything', true); // 1000 と表示
course.printStudentNumbers('anything', false); // 200 と表示
