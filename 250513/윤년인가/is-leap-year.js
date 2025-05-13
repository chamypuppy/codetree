const fs = require("fs");
const y = Number(fs.readFileSync(0).toString()); // 자연수 1개는 toString할 필요가 있나?

if(y%4 == 0) {
    if(y%100 == 0 && y%400 != 0) console.log("false");
    else console.log("true");
} else {
    console.log("false");
}