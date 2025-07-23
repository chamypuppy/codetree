const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let index = 0;

while(typeof(input[index] == Number)) {
    if(input[index] < 25) {
        console.log("Higher");
        index++;
    } else if(input[index] > 25) {
        console.log("Lower");
        index++;
    } else {
        console.log("Good");
        break;
    }
}