// loggedがPersonを包み込む.
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged // [Function: Person] と表示
class Person {
  constructor() {
    console.log('Hi!');
  }
}


// Decorator Factories
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true) // [Function: Car] と表示
// tsc実行時にエラーが出るけど[Function: Car]と表示されます.
class Car {}


// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true) // [Function: Plant] と表示
@printable // Plant { name: 'Green Plant' } と表示
class Plant {
  name: string = 'Green Plant';
}
const plant = new Plant();
(<any>plant).print();


// Method Decorator
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

class Project {
  projectName!: string;
  constructor(name: string) {
    this.projectName = name;
  }
  @editable(true) // ここでcalcBudgetを書き換え可能かどうかを判定する
  calcBudget(): void {
    console.log(1000);
  }
}

const project = new Project('Super Project');
project.calcBudget();
project.calcBudget = () => console.log(2000);
project.calcBudget();
