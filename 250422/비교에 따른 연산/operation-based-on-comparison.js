const fs = require("fs");
const num = fs.readFileSync(0).toString().trim().split(" ");

const a = +num[0];
const b = +num[1];

if(a > b) {
    console.log(a*b);
} else {
    //console.log((b/a).toFixed(0)); // 이런 방법도 있고
    console.log(Math.floor(b/a)); // 소수점 탈락시키는 floor
}