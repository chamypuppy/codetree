const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

/*const array = [];
arr = [a,b,c].sort();
console.log(arr[1]);
*/

if(b<=a) {
    if(a<=c) console.log(a);
} else if (a<=b) {
    if(b<=c) console.log(b);
} else { //b가 a랑 c보다 작다 (b<a) && (b<c)
    if(c<=a) console.log(c);
}