const fs = require("fs");
let input = fs.readFileSync(0).toString().split('\n'); //const도 되네

const a = Number(input[0]).toFixed(3);
const b = Number(input[1]).toFixed(3);
const c = Number(input[2]).toFixed(3);
//console.log(a + '\n' + b + '\n' +  c);
console.log(`${a}\n${b}\n${c}`);
