interface NamedPerson {
  name: string;
  age: number;
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
