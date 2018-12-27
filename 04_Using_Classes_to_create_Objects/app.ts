class Person {
  name: string;
  private type!: string;
  protected age: number = 27;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('Old Guy');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('sola', 'Sola');
console.log(person); // Person { username: 'Sola', age: 27, name: 'sola' } と表示
console.log(person.name, person.username); // sola Sola と表示
person.printAge(); // 27 Old Guy を表示
// person.setType('Cool guy'); // setTypeメソッドがprivateのため使えない

// Inheritance
class Sola extends Person {
  // name = 'SOLA';

  constructor(username: string) {
    super('Sola', username);
  }
}
const sola = new Sola('Taro');
console.log(sola); // Sola { username: 'Taro', age: 27, name: 'SOLA' } と表示
