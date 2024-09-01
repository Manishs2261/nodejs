const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");
const { type } = require("os");


const app = express();
const PORT = 8000;


//connection

mongoose.connect('mongodb://127.0.0.1:27017/demoLearn').then(() => console.log("mongodb connected")).catch(err => console.log("mongos error", err));


//schema

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







//Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    next();
});


//Routes 

// Html Document Render 
app.get('/users', async (req, res) => {

    const allDbUsers = await User.find({});

    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName}</li>`)}
    </ul>
    `;
    res.send(html);
})

 

app.post("/api/users", async (req, res) => {
    // TODO: Crete new user
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.job_title) {
        return res.status(400).json({ msg: "All filesd are requred" });
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title
    }
       
    );

    console.log("result", result);

    return res.status(201).json({ msg: "success" });
});



//Dynamic routes
app.route("/api/users/:id")
    .get(async (req, res) => {
        const user = await User.findById(req.params.id); 
        if(!user) return res.status(404).json({error:"User not found"});
        return res.json(user);
    })
    .put((req, res) => {
        // TODO: Crete new user
        return res.json({ status: "pending put" });
    })
    .patch(async (req, res) => {
        // TODO: Crete new user

        await User.findByIdAndUpdate(req.params.id,{lastName :"Change"});
        return res.json({ status: "Success" });
    })
    .delete( async (req, res) => {
        // TODO: Crete new user
 await User.findByIdAndDelete(req.params.id);
        return res.json({ status: " delete" });
    });


app.listen(PORT, () => console.log('Server started at Port'));