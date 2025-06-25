const fs = require("fs");
const n = fs.readFileSync(0).toString().trim().split(" ");
let resultValue = [];

for(let i=0; i<10; i++) {
    if(i<2) resultValue.push(Number(n[i]));
    else resultValue.push((resultValue[i-2] + resultValue[i-1])%10);
}

console.log(resultValue.join(" "));