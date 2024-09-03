// const math = require("./math");
const express = require("express");
const userRouter = require("./routes/user");
const {connnectionMongoDb} = require('./connection');
const {logReqRes} = require("./middleware");
 



const app = express();
const PORT = 8000;


//connections
connnectionMongoDb("mongodb://127.0.0.1:27017/demoLearn").then(()=> console.log("MongoDb connected"));


//Middleware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//routers 
app.use("/api/users",userRouter);

app.listen(PORT, () => console.log('Server started at Port'));