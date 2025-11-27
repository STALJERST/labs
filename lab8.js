function iterate(object, callback) {
  for (const key in object) {
    callback(key, object[key], object);
  }
}


const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
  console.log({ key, value });
});


function store(value) {
  return function() {
    return value;
  };
}


const read = store(5);
console.log(read()); // 5


function contract(fn, ...types) {
  return function (...args) {
    const argTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];

    if (args.length !== argTypes.length) {
      throw new TypeError("Wrong number of arguments");
    }

    for (let i = 0; i < argTypes.length; i++) {
      if (!(args[i] instanceof argTypes[i] || typeof args[i] === argTypes[i].name.toLowerCase())) {
        throw new TypeError(`Argument ${i + 1} must be ${argTypes[i].name}`);
      }
    }

    const result = fn(...args);

    if (!(result instanceof returnType || typeof result === returnType.name.toLowerCase())) {
      throw new TypeError(`Return value must be ${returnType.name}`);
    }

    return result;
  };
}
