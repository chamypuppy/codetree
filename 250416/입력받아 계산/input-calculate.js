const fs = require("fs");

let a = Number(fs.readFileSync(0));

a+=2;

console.log(a);
