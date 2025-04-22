const fs = require("fs");
const score = fs.readFileSync(0).toString().trim();

if (score >= 90) console.log("A");
else if (score < 90 && score >= 80) console.log("B");
else if (score < 80 && score >= 70) console.log("C");
else if (score < 70 && score >= 60) console.log("D");
else console.log("F");