'use strict';

function inc(a){
return a++;
};

let b=4;
console.dir(b=inc(b))


function inc_one(num) {
    num.n += 1;
}
const obj = { n: 5 };
inc_one(obj);
console.dir(obj); 





let types = {}

let array = [true, 'hello', 5, 12, -200, false, false, 'word'];
 


for (let item of array) {
    let type = typeof item;  

    if (!(type in types)) {
        types[type] = 0;
    }

  
    types[type]++;
}

console.log(types);
