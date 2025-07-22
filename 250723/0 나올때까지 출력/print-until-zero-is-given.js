const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(item => Number(item));
let index = 0;

while(true) {
    const num = input[index];
    if(num != 0) {
        console.log(num);
        index++;
    }
    else break;
}