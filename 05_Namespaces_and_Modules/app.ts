namespace MyMath {
  const PI: number = 3.14;

  export function calCircumference(diameter: number): number {
    return diameter * PI;
  }

  export function calRectangle(width: number, height: number): number {
    return width * height;
  }
}

const PI: number = 2.23847928374;

console.log(MyMath.calCircumference(10)); // 31.400000000000002 と表示
console.log(MyMath.calRectangle(10, 20)); // 200 と表示
console.log(PI); // 2.23847928374 と表示
