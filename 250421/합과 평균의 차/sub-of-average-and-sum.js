const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];

const sum = a+b+c;
const ave = sum/3;
const min = sum - ave;

console.log(`${sum}\n${ave}\n${min}`);