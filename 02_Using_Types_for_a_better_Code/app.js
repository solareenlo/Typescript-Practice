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
//# sourceMappingURL=app.js.map