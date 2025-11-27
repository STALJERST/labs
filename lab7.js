let array = [1, 2, 3, 4, 5, 6, 7];

let index = array.indexOf(5);
if (index !== -1) array.splice(index, 1);

console.log(array);
// [1, 2, 3, 4, 6, 7]

let array2 = [1, 2, 3, 4, 5, 6, 7];
let items = [5, 1, 6];

for (const item of items) {
  let i = array2.indexOf(item);
  if (i !== -1) array2.splice(i, 1);
}

console.log(array2);
// [2, 3, 4, 7]


let array3 = [2, 1, 1, 3, 2];
let uniqueArray = [...new Set(array3)];

console.log(uniqueArray);
// [2, 1, 3]


let array1 = [7, -2, 10, 5, 0];
 array2 = [0, 10];

let diff = array1.filter(x => !array2.includes(x));

console.log(diff);
// [7, -2, 5]
