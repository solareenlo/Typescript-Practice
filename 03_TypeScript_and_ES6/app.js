"use strict";
// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start = 10) => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countdown();
// Rest & Spread
console.log("REST & SPREAD");
const numbers = [1, 2, 10, -5];
console.log(Math.max(33, 30, 99, -14));
console.log(Math.max(...numbers));
