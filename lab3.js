function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(10));      
console.log(random(5, 15)); 

//

function generateKey(length, characters) {
  let key = "";
  const n = characters.length;

  for (let i = 0; i < length; i++) {
    const index = random(0, n - 1); 
    key += characters[index];
  }

  return key;
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generateKey(16, characters);
console.log(key); // приклад: eg599gb60q926j8i

//

function ipToInt(ip = "127.0.0.1") {
  return ip
    .split('.')            
    .map(Number)           
    .reduce((acc, byte, i) => {
      return acc + (byte << ((3 - i) * 8));
    }, 0);
}

console.log(ipToInt("127.0.0.1"));       // 2130706433
console.log(ipToInt("10.0.0.1"));        // 167772161
console.log(ipToInt("192.168.1.10"));    // -1062731510
console.log(ipToInt("165.225.133.150")); // -1511946858
console.log(ipToInt("0.0.0.0"));         // 0
console.log(ipToInt("8.8.8.8"));         // 134744072 або 0x08080808

//

function introspect(iface) {
  const result = [];

  for (const key in iface) {
    const value = iface[key];
    if (typeof value === "function") {
      result.push([key, value.length]); 
    }
  }

  return result;
}

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

console.log(introspect(iface));


