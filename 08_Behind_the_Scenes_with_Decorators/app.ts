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
  return function(target: any) {
    value ? logged : null
  };
}

@logging(true) // [Function: Car] と表示
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


// Method Decorator 関数の書き込み許可を制御する
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

// Property Decorator プロパティの書き込み許可を制御する
function overwritable(value: boolean) {
  return function (target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}

class Project {
  @overwritable(true) // falseにするとpropertyが書き込み禁止になる.
  projectName!: string;
  constructor(name: string) {
    this.projectName = name; // @overwritalbe(false) だとここでエラーになる.
  }
  @editable(true) // ここでcalcBudgetを書き換え可能かどうかを判定する
  calcBudget(): void {
    console.log(1000);
  }
}

const project = new Project('Super Project');
project.calcBudget(); // 1000 と表示
project.calcBudget = () => console.log(2000);
project.calcBudget(); // 2000 と表示
