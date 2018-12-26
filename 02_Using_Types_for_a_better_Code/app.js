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
// any
let car = "BMW";
console.log(car); // car と表示
car = { brand: "BMW", series: 3 };
console.log(car); // { brand: 'BMW', series: 3 } と表示
// carのtypeがanyなので, 色々な型を使用できる.
// functions
function returnMyname() {
    return myName;
}
console.log(returnMyname()); // sola と表示
// void 関数の返り値がないときはvoidを指定
function sayHello() {
    console.log('Hello');
}
sayHello(); // Hello と表示
// argument types 関数の引数にも返り値にも型を指定する
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3)); // 6 と表示
// function types 関数をコピーするときも型を指定しよう
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(1, 2)); // 2 と表示
// objects オブジェクトの中身の型も指定しよう
let userData = {
    name: 'sola',
    age: 27
};
console.log(userData); // { name: 'sola', age: 27 } と表示
// complex object 複雑なオブジェクトの書き方の例
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex); // { data: [ 100, 3.99, 10 ], output: [Function: output] } と表示
//# sourceMappingURL=app.js.map