// classの中のobjectに対して,
// 要素を追加したり全削除したり閲覧したりする.
// それらをgenericsを用いて,
// numberでもstringでもできるようにした.
class MyMap<T> {
  private map: {[key: string]: T} = {};

  setItem(key: string, value: T) {
    this.map[key] = value;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() { this.map = {} };

  printMap() {
    for(let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
};

const numberMap = new MyMap<number>();
numberMap.setItem('apple', 4);
console.log(numberMap); // MyMap { map: { apple: 4 } } と表示
console.log(numberMap.getItem('apple'));
numberMap.clear(); // 4 と表示
console.log(numberMap); // MyMap { map: {} } と表示
numberMap.setItem('banana', 6);
numberMap.printMap(); // banana 6 と表示

console.log('');

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'sola');
console.log(stringMap); // MyMap { map: { name: sola } } と表示
console.log(stringMap.getItem('name'));
stringMap.clear(); // sola と表示
console.log(stringMap); // MyMap { map: {} } と表示
stringMap.setItem('age', '26');
stringMap.printMap(); // age 26 と表示
