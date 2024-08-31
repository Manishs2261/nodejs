const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");


const app = express();
const PORT = 8000;


//Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
console.log("Hello from middleware 1");
next();
});


//Routes 

// Html Document Render 
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
    res.send(html);
})

//List of all users json 
app.get("/api/users", (req, res) => {

    res.set
    return res.json(users);
});

app.post("/api/users", (req, res) => {
    // TODO: Crete new user
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (req, data) => {
        return res.json({ status: "Success", id: users.length });
    });
});



// //get user  Dynamic Path Parameters
// app.get("/api/users/:id",(req,res)=>{

//     const id = Number(req.params.id);
//     const user = users.find((user)=> user.id == id);
//       return res.json(user);
// });


// app.patch("/api/users/:id",(req,res)=>{
//  // TODO: Crete new user
//     return res.json({status: "pending patch"});
// });


// app.delete("/api/users/:id",(req,res)=>{
//     // TODO: Crete new user
//        return res.json({status: "pending delete"});
//    });




//Dynamic routes
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id);
        return res.json(user);
    })
    .put((req, res) => {
        // TODO: Crete new user
        return res.json({ status: "pending put" });
    })
    .patch((req, res) => {
        // TODO: Crete new user
        return res.json({ status: "pending patch" });
    })
    .delete((req, res) => {
        // TODO: Crete new user
        return res.json({ status: "pending delete" });
    });


app.listen(PORT, () => console.log('Server started at Port'));