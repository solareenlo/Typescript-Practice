"use strict";
var MyMath;
(function (MyMath) {
    function calRectangle(width, height) {
        return width * height;
    }
    MyMath.calRectangle = calRectangle;
})(MyMath || (MyMath = {}));
