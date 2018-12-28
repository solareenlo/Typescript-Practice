"use strict";
// Generic
function echo(data) {
    return data;
}
;
console.log(echo('sola').length); // 4 と表示
console.log(echo(27)); // 27 と表示
console.log(echo({ name: 'sola', age: 27 })); // { name: 'sola', age: 27 } と表示
// Built-in Generics
const testResults = [1.92, 3.33];
testResults.push(-1.23);
console.log(testResults); // [ 1.92, 3.33, -1.23 ] と表示
// Arrays
function printAll(args) {
    args.forEach((element) => console.log(element));
}
printAll(['Apple', 'Banana']); // Apple Banana と表示
// Generic Types
const echo2 = echo;
console.log(echo2('Something')); // Something と表示
