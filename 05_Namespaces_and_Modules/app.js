var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calCircumference = calCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calRectangle(width, height) {
        return width * height;
    }
    MyMath.calRectangle = calRectangle;
})(MyMath || (MyMath = {}));
// $ tsc app.ts --outfile app.js --types node
// とコンパイルする.
/// <reference path="circle.ts" />
/// <reference path="rectangle.ts" />
var CircleMath = MyMath.Circle;
var PI = 2.23847928374;
console.log(CircleMath.calCircumference(10)); // 31.400000000000002 と表示
console.log(MyMath.calRectangle(10, 20)); // 200 と表示
console.log(PI); // 2.23847928374 と表示
