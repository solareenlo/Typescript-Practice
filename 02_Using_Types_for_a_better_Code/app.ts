// string
let myName: string = 'sola';
// myName = 20; // $tsc するとエラーになる.

// number
let myAge: number = 27;
// myAge = 'sola'; // $tsc するとエラーになる.

// boolean
let hasFoods: boolean = false;
// hasFoods = 2; // $tsc するとエラーになる.

// assign types
let myRealAge;
myRealAge = 27;
myRealAge = '28'; // これはエラーにならない.

let myRealAge2: number;
myRealAge2 = 27;
// myRealAge2 = '27'; // これはエラーになる. 型を明示しているため.

// array
let hobbies = ["Cooking", "Sports"];
// hobbies = [100]; // これはエラーになる. 配列の中身がString型では無いので.

let hobbies2: any[] = ["Cooking", "Sports"];
hobbies2 = [100]; // これはエラーにならない. 配列の中身の型がanyになっているので.
// hobbies2 = 100; // これはエラーになる. 配列では無いので.

// tuples
let address: [string, number] = ["Super", 99]; // これはエラーにならない.
// let address2: [number, string] = ["Suber", 99]; // これはエラーになる. 型の順番が違うので.

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue, // 101
  Red = 3 // 3
}
let myColor: Color = Color.Green;
console.log(myColor); // 100 と表示
