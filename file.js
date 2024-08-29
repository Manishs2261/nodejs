const fs = require("fs");


// for creating new file  Sync
fs.writeFileSync("./test.txt","Hello manish");

// for creating new file Async 
fs.writeFile("./test1.txt","hellow async",(err)=>{});


const result =fs.readFileSync("./contect.txt","utf-8")
 
console.log(result);