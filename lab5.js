'use strict';

function seq(...fns) {
  function chain(arg) {
    if (typeof arg === "number") {
      let result = arg;
      for (const fn of fns) result = fn(result);
      return result;
    }
    if (typeof arg === "function") {
      return seq(...fns, arg);
    }
  }
  return chain;
}


console.log(
  seq(x => x + 7)(x => x * 2)(5)
); // 17

console.log(
  seq(x => x * 2)(x => x + 7)(5)
); // 24

console.log(
  seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7)
); // 3

function array() {
  const data = []; // Замикання зберігає наш "масив"

  function arr(index) {
    return data[index]; // Отримати елемент
  }

  arr.push = function(value) {
    data.push(value);
  };

  arr.pop = function() {
    return data.pop();
  };

  return arr;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // first
console.log(arr(1)); // second
console.log(arr(2)); // third

console.log(arr.pop()); // third
console.log(arr.pop()); // second
console.log(arr.pop()); // first
console.log(arr.pop()); // undefined

