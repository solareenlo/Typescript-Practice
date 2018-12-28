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
// Generic Class
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 30;
console.log(simpleMath.calculate()); // 300 と表示
// Generic Constraints ジェネリクスに制約を与えられる
class SimpleMath2 {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath2 = new SimpleMath2();
simpleMath2.baseValue = '10';
simpleMath2.multiplyValue = '30';
console.log(simpleMath2.calculate()); // 300 と表示
// Generic Constraints ジェネリクスにさらなる制約を与える
class SimpleMath3 {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath3 = new SimpleMath3();
simpleMath3.baseValue = '10';
simpleMath3.multiplyValue = 30;
console.log(simpleMath3.calculate()); // 300 と表示
