// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done", start);
}
countdown();
