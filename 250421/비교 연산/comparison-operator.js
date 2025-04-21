const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const num1 = +input[0];
const num2 = +input[1];

const t = 1;
const f = 0;

//1
(num1 >= num2) ? console.log(t) : console.log(f);

//2
if(num1 > num2) console.log(t)
else console.log(f);

//3
(num2 >= num1) ? console.log(t) : console.log(f);

//4
(num2 > num1) ? console.log(t) : console.log(f);

//5
if(num1 == num2) {
    console.log(t);
} else { 
    console.log(f);}

//6
if(num1 != num2) console.log(t);
else console.log(f);
