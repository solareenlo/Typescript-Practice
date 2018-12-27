"use strict";
// Exercise 1 - Class
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    ;
    honk() {
        console.log('TooooooooooT!');
    }
    ;
    accelerate(speed) {
        this.acceleration += speed;
    }
    ;
}
const car = new Car('BMW');
car.honk();
console.log(car.acceleration); // 0 と表示
car.accelerate(10);
console.log(car.acceleration); // 10 と表示
// Exercise 2 - Inheritance
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    constructor() {
        super(...arguments);
        this.width = 5;
        this.length = 2;
    }
    CalcSize() {
        return this.width * this.length;
    }
    ;
}
const rectangle = new Rectangle();
console.log(rectangle.CalcSize()); // 10 と表示
// Exercise 3
class Person2 {
    constructor() {
        this._firstName = 'DEFAULT';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = '';
        }
    }
}
const person2 = new Person2();
console.log(person2.firstName); // DEFAULT と表示
person2.firstName = 'SO';
console.log(person2.firstName); // '' と表示
person2.firstName = 'SOLA';
console.log(person2.firstName); // SOLA と表示
