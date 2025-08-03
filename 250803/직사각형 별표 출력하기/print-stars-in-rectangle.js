const fs = require("fs");
const num = fs.readFileSync(0).toString().trim().split(" ").map(item => Number(item));
const num1 = num[0];
const num2 = num[1];


for(let i=0; i<num1; i++) {
    let str = "";
    for(let j=0; j<num2; j++) {
        str+= "* ";
    }
    console.log(str);
}