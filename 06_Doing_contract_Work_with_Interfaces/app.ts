interface NamedPerson {
  name: string;
  age?: number; // age? はageが無くても許可するということ
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet(person: NamedPerson) {
  console.log(`Hello, ${person.name}.`);
}

function changeName(person: NamedPerson) {
  person.name = 'Taro';
}

const person: NamedPerson = {
  name: 'sola',
  age: 27,
  hobbies: ['Cooking', 'Sports'],
  greet(lastName: string) {
    console.log(`Hi, I am ${this.name} ${lastName}.`);
  }
}

greet(person); // Hello, sola. と表示
changeName(person);
greet(person); // Hello, Taro. と表示
// greet({name: 'sola', age: 27}); // Hello, sola. と表示
person.greet('Yamada'); // Hi, I am Taro Yamada. と表示


class Person implements NamedPerson {
  name!: string; // !は初期化の値が無くても許可するということ
  lastName!: string; // !は初期化の値が無くても許可するということ
  greet(lastName: string) {
    console.log(`Hi, I am ${this.name} ${lastName}.`);
  }
}

const myPerson = new Person();
myPerson.name = 'solasola';
myPerson.lastName = 'Anything';
greet(myPerson); // Hello, solasola. と表示
myPerson.greet(myPerson.lastName); // Hi, I am solasola Anything. と表示


// Function Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(4, 10)); // 28 と表示


// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 30,
  name: 'sola',
  greet(lastName: string) {
    console.log('Hello!');
  }
};

console.log(oldPerson); // { age: 30, name: 'sola', greet: [Function: greet] } と表示
