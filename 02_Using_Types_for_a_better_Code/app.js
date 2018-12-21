"use strict";
// string
let myName = 'sola';
// myName = 20; // $tsc するとエラーになる.
// number
let myAge = 27;
// myAge = 'sola'; // $tsc するとエラーになる.
// boolean
let hasFoods = false;
// hasFoods = 2; // $tsc するとエラーになる.
// assign types
let myRealAge;
myRealAge = 27;
myRealAge = '28'; // これはエラーにならない.
let myRealAge2;
myRealAge2 = 27;
// myRealAge2 = '27'; // これはエラーになる. 型を明示しているため.
// array
let hobbies = ["Cooking", "Sports"];
// hobbies = [100]; // これはエラーになる. 配列の中身がString型では無いので.
let hobbies2 = ["Cooking", "Sports"];
hobbies2 = [100]; // これはエラーにならない. 配列の中身の型がanyになっているので.
// hobbies2 = 100; // これはエラーになる. 配列では無いので.
// tuples
let address = ["Super", 99]; // これはエラーにならない.
// let address2: [number, string] = ["Suber", 99]; // これはエラーになる. 型の順番が違うので.
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
    Color[Color["Red"] = 3] = "Red"; // 3
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor); // 100 と表示
//# sourceMappingURL=app.js.map