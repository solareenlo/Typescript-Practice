// Exercise 1 - As Arrow Function
const double = (num: number): number => num * 2;
console.log(double(10)); // 20 と表示


// Exercise 2 - Default Params
const greet = (name: string = 'sola'): void => {
  console.log(`Hello, ${name}.`);
}
greet(); // Hello, sola. と表示
greet('Taro'); // Hello, Taro. と表示


// Exercise 3 - Spread Operator
const nums: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums)); // -3 と表示


// Exercise 4 - Spread Operator
const newArray: number[] = [55, 20];
newArray.push(...nums);
console.log(newArray); // [ 55, 20, -3, 33, 38, 5 ] と表示


// Exercise 5 - Destructuring Arrays
const testResults: number[] = [3.89, 2.99, 1.28];
const [result1, result2, result3]: number[] = testResults;
console.log(result1, result2, result3); // 3.89 2.99 1.28 と表示


// Exercise 6 - Destructuring Objects
const scientist: { firstName: string, experience: number} = {
  firstName: 'sola',
  experience: 12
}
const {firstName, experience}: { firstName: string, experience: number} = scientist;
console.log(firstName, experience); // sola 12 と表示
