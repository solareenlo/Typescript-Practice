class Person {
  name: string;
  private type: string = 'test';
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
console.log(person.name, person.username); // sola Sola と表示
person.printAge();
// person.setType('Cool guy'); // setTypeメソッドがprivateのため使えない
