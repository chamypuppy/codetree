const fs = require("fs");
const scores = fs.readFileSync(0).toString().trim().split("\n");
//console.log(scores);


const a_score = scores[0];
const b_score = scores[1];

const a_math = +a_score.split(" ")[0];
const a_eng = +a_score.split(" ")[1];

const b_math = +b_score.split(" ")[0];
const b_eng = +b_score.split(" ")[1];


if(a_math > b_math && a_eng > b_eng) console.log(1);
else console.log(0);
