const fs = require("fs");
const num = Number(fs.readFileSync(0).toString().trim());

for(let i=0; i<num; i++) {
    let str = "";
    for(let j=0; j<2*i+1; j++) { // 가운데 조건이 패턴의 규칙
        str += "*";
    }
    console.log(str);
}
