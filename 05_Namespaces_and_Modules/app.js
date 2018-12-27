var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calCircumference = calCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calRectangle(width, height) {
        return width * height;
    }
    MyMath.calRectangle = calRectangle;
})(MyMath || (MyMath = {}));
// コンパイルするときは,
// $ tsc --outFile app.js circle.ts rectangle.ts app.ts --types node
// .tsファイルの入力順番を間違えないこと.
// .tsファイルを入力した順番にコンパルされたjsコードがapp.jsに追加されます.
var PI = 2.23847928374;
console.log(MyMath.calCircumference(10)); // 31.400000000000002 と表示
console.log(MyMath.calRectangle(10, 20)); // 200 と表示
console.log(PI); // 2.23847928374 と表示
