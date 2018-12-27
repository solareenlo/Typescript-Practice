// $ tsc app.ts --outfile app.js --types node
// とコンパイルする.
/// <reference path="circle.ts" />
/// <reference path="rectangle.ts" />
import CircleMath = MyMath.Circle;

const PI: number = 2.23847928374;

console.log(CircleMath.calCircumference(10)); // 31.400000000000002 と表示
console.log(MyMath.calRectangle(10, 20)); // 200 と表示
console.log(PI); // 2.23847928374 と表示
