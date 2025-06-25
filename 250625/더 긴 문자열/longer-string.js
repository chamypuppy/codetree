const fs = require("fs");
//const str = fs.readFileSync(0).toString().trim().split(" ");
const [str1, str2] = fs.readFileSync(0).toString().trim().split(" ");

// const str1 = str[0];
// const str2 = str[1];


if(str1.length < str2.length) console.log(str2, str2.length);
else if (str1.length > str2.length) console.log(str1, str1.length);
else console.log("same");