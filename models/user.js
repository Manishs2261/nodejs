const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    
},
{
    timestamps:true,
}
);


//Modal

const User = mongoose.model("User", userSchema);

module.exports = User;