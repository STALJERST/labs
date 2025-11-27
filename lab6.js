
const pipe = (...fns) => {
  if (fns.some(fn => typeof fn !== "function")) {
    throw new TypeError("All arguments of pipe must be functions");
  }

  return x => {
    return fns.reduce((value, fn) => fn(value), x);
  };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc, twice, cube)(5)); // 1728
console.log(pipe(inc, inc)(7)); // 9
pipe(inc, 7, cube); 



function composeSafe(...fns) {
  const handlers = { error: [] };


  const composed = function(input) {
    let value = input;

    for (let i = fns.length - 1; i >= 0; i--) {
      const fn = fns[i];
      try {
        value = fn(value);
      } catch (e) {
        handlers.error.forEach(h => h(e));
        return undefined; 
      }
    }

    return value;
  };

  composed.on = function(event, handler) {
    if (event === "error") {
      handlers.error.push(handler);
    }
    return composed;
  };

  return composed;
}

