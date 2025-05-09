const fs = require("fs");
const n = +fs.readFileSync(0).toString().trim();
let bool = 0;

if(n%2 == 1 && n%3 == 0 || n%2 == 0 && n%5 ==0) bool = 1;
else bool;

console.log(Boolean(bool));