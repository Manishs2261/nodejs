const fs = require("fs");
const os = require("os");


console.log(os.cpus().length);

// for creating new file  Sync
fs.writeFileSync("./test.txt","Hello manish");

// for creating new file Async 
fs.writeFile("./test1.txt","hellow async",(err)=>{});


// file reader
const result =fs.readFileSync("./contect.txt","utf-8")
 
console.log(result); 