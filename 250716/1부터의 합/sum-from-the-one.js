const fs = require("fs");
const num = Number(fs.readFileSync(0).toString().trim());
let plus = 0;
let result = 0;


for(let i=1; i<101; i++){
    plus += i;
    if(plus >= num) {
        console.log(result += i);
        break;
    }
}