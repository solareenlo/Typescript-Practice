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
myRealAge2 = '27'; // これはエラーになる. 型を明示しているため.
// array
let hobbies = ["Cooking", "Sports"];
hobbies = [100]; // これはエラーになる. 配列の中身がString型では無いので.
let hobbies2 = ["Cooking", "Sports"];
hobbies2 = [100]; // これはエラーにならない. 配列の中身の型がanyになっているので.
hobbies2 = 100; // これはエラーになる. 配列では無いので.
//# sourceMappingURL=app.js.map