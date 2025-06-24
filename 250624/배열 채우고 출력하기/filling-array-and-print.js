//let arr = new Array();

const fs = require("fs");

const alphabet = fs.readFileSync(0).toString().trim().split(" ");
//split 자동배열
alphabet.reverse();

let string = "";

for(let i=0; i<alphabet.length; i++) {
    string += alphabet[i];
}


console.log(string);

