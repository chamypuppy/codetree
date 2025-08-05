const fs = require("fs");
const num = +fs.readFileSync(0).toString().trim();

for(let i=0; i<num; i++) {
    let str = "";
    for(let j=0; j<num-i; j++) {
        str += "* ";
    }
    console.log(str);
}