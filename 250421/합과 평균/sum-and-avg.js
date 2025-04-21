const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ");

const a = +input[0];
const b = +input[1];

const sum = a+b;

const ave = sum/2;

console.log(`${sum} ${ave.toFixed(1)}`);
