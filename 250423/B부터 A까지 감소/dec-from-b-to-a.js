const fs = require("fs");
const num = fs.readFileSync(0).toString().trim().split(" ");

const a = +num[0];
const b = +num[1];
let str = "";

for(let i=b; a <= i; --i) {
    if(i !=2) str += i + " ";
    else str += i;
}

console.log(str);