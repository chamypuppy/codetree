const fs = require("fs");
const char = fs.readFileSync(0).toString().trim();
const arr = ["apple", "banana", "grape", "blueberry", "orange"];
let cnt = 0;

for(let i=0; i<arr.length; i++) {
    let str = arr[i];
    if(str[2] == char || str[3] == char) {
        console.log(str); 
        cnt++;
    }
    //if(str.charAt(2) == char || str.charAt(3) == char) {console.log(str); cnt++;} 이것도 됨

}
console.log(cnt);

// map 사용 시
// arr.map(item => {
//     if(item[2] == char || item[3] == char) {
//         cnt++
//         return console.log(item);
//     }
// })
// console.log(cnt);