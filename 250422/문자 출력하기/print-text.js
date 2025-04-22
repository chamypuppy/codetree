const fs = require("fs");
const n = fs.readFileSync(0).toString().trim();
let initial = [];

for (let i=0; i<8; i++) {
    initial += n;
}
console.log(initial);


// 숫자형*문자형 = 숫자만큼 문자 늘어남  < 파이썬에서 가능...