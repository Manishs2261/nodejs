const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req , res)=>{

    if(req.url == "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.url} New Rew Recevied\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
       
        switch(myUrl.pathname){

            case "/":
                res.end("Home");
                break;
            
                case "/about":
                    res.end("i am Manish sa");
                    break;

                    default :
                    res.end("404 not page");
        }

    })
     
});


myServer.listen(8000, ()=> console.log("Server Started!"));