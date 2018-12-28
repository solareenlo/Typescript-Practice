// Generic
function echo<T>(data: T) {
  return data;
};

console.log(echo('sola').length); // 4 と表示
console.log(echo<number>(27)); // 27 と表示
console.log(echo({name: 'sola', age: 27})); // { name: 'sola', age: 27 } と表示


// Built-in Generics
const testResults: Array<number> = [1.92, 3.33];
testResults.push(-1.23);
console.log(testResults); // [ 1.92, 3.33, -1.23 ] と表示


// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(['Apple', 'Banana']); // Apple Banana と表示


// Generic Types
const echo2: <T>(data: T) => T = echo;
console.log(echo2<string>('Something')); // Something と表示
