function echo<T>(data: T) {
  return data;
};

console.log(echo('sola').length); // 4 と表示
console.log(echo<number>(27)); // 27 と表示
console.log(echo({name: 'sola', age: 27})); // { name: 'sola', age: 27 } と表示
