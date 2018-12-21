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
myRealAge2 = '27'; // これはエラーになる. 型を明示しているため.
