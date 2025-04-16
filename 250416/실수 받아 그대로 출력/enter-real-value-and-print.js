const fs = require("fs");
const a = Number(fs.readFileSync(0)).toFixed(2);

console.log(a);