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


// Generic Class
class SimpleMath<T> {
  baseValue!: T;
  multiplyValue!: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 30;
console.log(simpleMath.calculate()); // 300 と表示


// Generic Constraints ジェネリクスに制約を与えられる
class SimpleMath2<T extends number | string> {
  baseValue!: T;
  multiplyValue!: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}
const simpleMath2 = new SimpleMath2<string>();
simpleMath2.baseValue = '10';
simpleMath2.multiplyValue = '30';
console.log(simpleMath2.calculate()); // 300 と表示


// Generic Constraints ジェネリクスにさらなる制約を与える
class SimpleMath3<T extends number | string, U extends number | string> {
  baseValue!: T; // こちらはTの条件で,
  multiplyValue!: U; // こちらはUの条件を持つ.
  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}
const simpleMath3 = new SimpleMath3<string, number>();
simpleMath3.baseValue = '10';
simpleMath3.multiplyValue = 30;
console.log(simpleMath3.calculate()); // 300 と表示
