"use strict";
function echo(data) {
    return data;
}
;
console.log(echo('sola').length); // 4 と表示
console.log(echo(27));
console.log(echo({ name: 'sola', age: 27 }));
