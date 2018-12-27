// コンパイルするときは,
// $ tsc --outFile app.js circle.ts rectangle.ts app.ts --types node
// .tsファイルの入力順番を間違えないこと.
// .tsファイルを入力した順番にコンパルされたjsコードがapp.jsに追加されます.
/// <reference path="circle.ts" />
/// <reference path="rectangle.ts" />
const PI: number = 2.23847928374;

console.log(MyMath.calCircumference(10)); // 31.400000000000002 と表示
console.log(MyMath.calRectangle(10, 20)); // 200 と表示
console.log(PI); // 2.23847928374 と表示
