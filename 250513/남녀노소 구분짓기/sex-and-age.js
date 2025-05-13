const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split("\n");

const gender = input[0];
const age = input[1];

if(gender == 0) { //남성
    if(age > 18) console.log("MAN");
    else console.log("BOY");
} else { //여성
    if(age > 18) console.log("WOMAN");
    else console.log("GIRL");
}