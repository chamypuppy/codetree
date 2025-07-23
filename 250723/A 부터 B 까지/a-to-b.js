const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(item => Number(item));
let start = arr[0];
const end = arr[1];
let str = [];
str.push(start);

while(true) {
    if(start % 2 == 0) {
        start += 3;
        if(start <= end) str.push(start);
        else break;
    } else {
        start *= 2;
        if(start <= end) str.push(start);
        else break;
    }
}
console.log(str.join(" "));