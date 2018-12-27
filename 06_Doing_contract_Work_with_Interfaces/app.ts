interface NamedPerson {
  name: string;
}

function greet(person: NamedPerson) {
  console.log(`Hello, ${person.name}.`);
}

function changeName(person: NamedPerson) {
  person.name = 'Taro';
}

const person: {name: string, age: number} = {
  name: 'sola',
  age: 27
}

greet(person); // Hello, sola. と表示
changeName(person);
greet(person); // Hello, Taro. と表示
