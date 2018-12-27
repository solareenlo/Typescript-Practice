// class
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


// Inheritance 継承
class Sola extends Person {
  // name = 'SOLA';

  constructor(username: string) {
    super('Sola', username);
    this.age = 32;
  }
}
const sola = new Sola('Taro');
console.log(sola); // Sola { username: 'Taro', age: 32, name: 'SOLA' } と表示

// Getters & Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species); // Default と表示
plant.species = 'AB';
console.log(plant.species); // Default と表示
plant.species = 'Green Plant';
console.log(plant.species); // Green Plant と表示


// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI); // 6.28 と表示
console.log(Helpers.calcCircumference(10)); // 31.400000000000002 と表示


// Abstract Classes 抽象クラス
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName(name: string): void; // 抽象メソッド

  calcBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject); // ITProject { projectName: 'Default', budget: 1000 } と表示
newProject.changeName('Super IT Project');
console.log(newProject); // ITProject { projectName: 'Super IT Project', budget: 1000 } と表示
