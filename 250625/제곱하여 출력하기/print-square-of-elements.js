const fs = require("fs");
const n = fs.readFileSync(0).toString().trim().split("\n");
const arr = n[1].split(" ");
let resultValue = [];

for(let i=0; i<n[0]; i++) {
    resultValue.push(arr[i] ** 2);
}

const string = resultValue.join(" ");
console.log(string);