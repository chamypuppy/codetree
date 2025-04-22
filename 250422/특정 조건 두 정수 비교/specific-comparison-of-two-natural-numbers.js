const fs = require("fs");
const num = fs.readFileSync(0).toString().trim().split(" ");

const a = +num[0];
const b = +num[1];
let c;
let d;

if (a < b) c=1;
else c=0;

if(a == b) {
    d=1;
    }
else {
    d=0;
    }

console.log(`${c} ${d}`);