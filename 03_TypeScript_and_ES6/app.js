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
