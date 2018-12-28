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
