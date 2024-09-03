const mongoose = require("mongoose");



//connection
 async function connnectionMongoDb(url) {

    return mongoose.connect(url);
    
 }

 module.exports = {
   connnectionMongoDb,
};
