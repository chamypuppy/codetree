const fs = require("fs");
const num = +fs.readFileSync(0).toString().trim();

let str = '';
const x = 1;

for (let i = 1; i < 6; i++) {
    if (i !== 5) str += num * i + ' ';
    else str += num * i;
}

console.log(str);


//str = str + num*i + ' '
//str = '' + 7*1 + ' ' = '7 ';
//str = '7 ' + 7*2 + ' ' = '7 14 '