const fs = require("fs");
const str = fs.readFileSync(0).toString().trim();
let newStr = "";
//console.log(str);

for(let i=0; i<str.length; i++) {
    if(i==1 || i==str.length-2) newStr += "a";
    else newStr += str[i];
}

console.log(newStr);