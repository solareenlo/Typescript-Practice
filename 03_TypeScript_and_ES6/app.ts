// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done", start);
}
countdown(); // 10 Done 0 と縦に表示

// Rest & Spread
console.log("REST & SPREAD");
const numbers: number[] = [1, 2, 10, -5];
console.log(Math.max(33, 30, 99, -14)); // 99 と表示
console.log(Math.max(...numbers)); // 10 と表示 spread演算子を用いてバラバラにしてる

function makeArray(name: string, ...args: number[]): number[] { // rest演算子を用いて塊にしてる
  return args;
}
console.log(makeArray("sola", 1, 2, 3)); // [1, 2, 3] と表示

// 関数の引数として, tuple型でrest演算子を使用する例
function printInfo(name: string, age: number): void {
  console.log(`My name is ${name} and I am ${age} years old.`);
  // My name is sola and I am 25 years old. と表示
}
printInfo('sola', 25);

function printInfo2(...info: [string, number]): void {
  console.log(`My name is ${info[0]} and I am ${info[1]} years old.`);
  // My name is sola and I am 25 years old. と表示
}
printInfo2('sola', 25);
