interface NamedPerson {
  name: string;
  age: number;
  [propName: string]: any;
}

function greet(person: NamedPerson) {
  console.log(`Hello, ${person.name}.`);
}

function changeName(person: NamedPerson) {
  person.name = 'Taro';
}

const person: {name: string, age: number, hobbies: string[]} = {
  name: 'sola',
  age: 27,
  hobbies: ['Cooking', 'Sports']
}

greet(person); // Hello, sola. と表示
changeName(person);
greet(person); // Hello, Taro. と表示
greet({name: 'sola', age: 27}); // Hello, sola. と表示
