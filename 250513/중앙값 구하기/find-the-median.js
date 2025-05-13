const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

/*const array = [];
arr = [a,b,c].sort();
console.log(arr[1]);
*/

if(a<b) {
    if(b<c) console.log(b);
    else if (a<c) console.log(c);
} else {
    if(a<c) console.log(a);
    else {
        if(b<c) console.log(b);
        else console.log(c);
    }
}