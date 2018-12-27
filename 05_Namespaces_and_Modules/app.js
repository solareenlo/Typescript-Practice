"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calCircumference = calCircumference;
    function calRectangle(width, height) {
        return width * height;
    }
    MyMath.calRectangle = calRectangle;
})(MyMath || (MyMath = {}));
var PI = 2.23847928374;
console.log(MyMath.calCircumference(10)); // 31.400000000000002 と表示
console.log(MyMath.calRectangle(10, 20)); // 200 と表示
console.log(PI); // 2.23847928374 と表示
