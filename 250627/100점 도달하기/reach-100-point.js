const fs = require("fs");
const num = Number(fs.readFileSync(0).toString().trim());
let score = num;
const arr = [];
for(let i=1; i<=100-num+1; i++) {
    if(score >= 90)arr.push("A"); 
    else if(score >= 80 && score < 90) arr.push("B"); 
    else if(score >= 70 && score < 80) arr.push("C"); 
    else if(score >= 60 && score < 70) arr.push("D"); 
    else arr.push("F");
    score+=1;
}

console.log(arr.join(" "));