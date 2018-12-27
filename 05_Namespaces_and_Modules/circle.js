"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calCircumference = calCircumference;
})(MyMath || (MyMath = {}));
