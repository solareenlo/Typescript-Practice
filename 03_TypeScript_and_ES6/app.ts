// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done", start);
}
countdown(); // 10 Done 0 と縦に表示

// Rest & Spread
console.log("REST & SPREAD");
const numbers: number[] = [1, 2, 10, -5];
console.log(Math.max(33, 30, 99, -14)); // 99 と表示
console.log(Math.max(...numbers)); // 10 と表示
