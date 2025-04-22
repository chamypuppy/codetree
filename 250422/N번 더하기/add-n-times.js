const fs = require("fs");
const num = fs.readFileSync(0).toString().trim().split(" ");

let a = +num[0];
const n = +num[1];

for(i=0; i<n; i++) {
    console.log(a+=n);
}