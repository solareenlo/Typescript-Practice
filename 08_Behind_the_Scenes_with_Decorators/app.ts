// loggedがPersonを包み込む.
function logged(constructorFn: Function) {
  console.log(constructorFn); // [Function: Person] と表示
}

@logged
class Person {
  constructor() {
    console.log('Hi!');
  }
}


// Decorator Factories
function logging(value: boolean) {
  return value ? logged : null; // [Function: Car] と表示
  // tsc実行時にエラーが出るけど[Function: Car]と表示されます.
}

@logging(true)
class Car {}


// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@printable
class Plant {
  name: string = 'Green Plant';
}
const plant = new Plant();
(<any>plant).print(); // Plant { name: 'Green Plant' } と表示
