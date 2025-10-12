'use strict';
let name = 'Yevhenii';
const year = 2007;


function greet(name) {
  console.log('Привіт,', name);
}
greet(name);

//

function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function rangeOdd(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) result.push(i);
  }
  return result;
}

console.log(range(15, 30));   
console.log(rangeOdd(15, 30));

//

function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  const result = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    result.push(average(sq, cb));
  }
  return result;
}

console.log(calculate());


//

function fn() {
  const constObj = { name: "Marcus" }; 
  let varObj = { name: "Aurelius" };   

  constObj.name = "Marcus Aurelius"; 


  varObj.name = "Philosopher";

  varObj = { name: "New Object" };

  console.log(constObj);
  console.log(varObj);
}

fn();

//

const phoneBook = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Lucius Seneca", phone: "+380971234567" },
  { name: "Epictetus", phone: "+380501112233" },
];

function findPhoneByName(name) {
  for (const record of phoneBook) {
    if (record.name === name) return record.phone;
  }
  return "Номер не знайдено";
}

console.log(findPhoneByName("Lucius Seneca")); // +380971234567

const phoneHash = {
  "Marcus Aurelius": "+380445554433",
  "Lucius Seneca": "+380971234567",
  "Epictetus": "+380501112233",
};

function findPhoneByNameHash(name) {
  return phoneHash[name] || "Номер не знайдено";
}

console.log(findPhoneByNameHash("Epictetus")); // +380501112233
