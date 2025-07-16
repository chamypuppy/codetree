const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());
const count = [];

for(let i=inputNum; i>0; i--) {
    if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0) continue;
    
    count.push(i);
}

console.log(count.length);