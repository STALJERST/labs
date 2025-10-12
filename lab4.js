function sumFor(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
function sumForOf(...args) {
  let total = 0;
  for (const num of args) {
    total += num;
  }
  return total;
}

function sumWhile(...args) {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
}

function sumDoWhile(...args) {
  if (args.length === 0) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);
  return total;
}

function sumReduce(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}


console.log(sumFor(1, 2, 3));     // 6
console.log(sumForOf(0));         // 0
console.log(sumWhile());          // 0
console.log(sumDoWhile(1, -1, 1));// 1
console.log(sumReduce(10, -1, -1, -1)); // 7


//
function max(matrix) {
  let maxVal = -Infinity;

  for (const row of matrix) {
    for (const value of row) {
      if (value > maxVal) {
        maxVal = value;
      }
    }
  }

  return maxVal;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9


//

function ages(persons) {
  const result = {};

  for (const name in persons) {
    const { born, died } = persons[name];
    result[name] = died - born;
  }

  return result;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));
