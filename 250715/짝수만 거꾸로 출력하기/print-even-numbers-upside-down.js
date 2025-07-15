const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("\n");
const numChar = Number(arr[0]);
const numArr = arr[1].split(" ");
let newArr = [];

for(let i=0; i< numChar+1; i++) {
    if(numArr[i] % 2 == 0) newArr.push(numArr[i]);
}

const result = (newArr.reverse()).join(" ");

console.log(result);