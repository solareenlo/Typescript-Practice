// Exercise 1 - Class
class Car {
  public name: string;
  public acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  };

  public honk(): void {
    console.log('TooooooooooT!');
  };

  public accelerate(speed: number): void {
    this.acceleration += speed;
  };
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration); // 0 と表示
car.accelerate(10);
console.log(car.acceleration); // 10 と表示


// Exercise 2 - Inheritance
class BaseObject {
  public width: number = 0;
  public length: number = 0;
}

class Rectangle extends BaseObject {
  public width: number = 5;
  public length: number = 2;

  public CalcSize(): number {
    return this.width * this.length;
  };
}

const rectangle = new Rectangle();
console.log(rectangle.CalcSize()); // 10 と表示


// Exercise 3
class Person2 {
  private _firstName: string = 'DEFAULT';

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    if(value.length > 3) {
      this._firstName = value;
    } else {
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
