
const User = require("../models/user");

async function handelGetAllUser(req, res) {
    const allDbUser = await User.find({});
    return res.json(allDbUser);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
}

async function handleUpdateUser(req, res) {

    await User.findByIdAndUpdate(req.params.id, { lastName: "Change" });
    return res.json({ status: "Success" });
}

async function handeleDeleted(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: " delete" });
}

async function handleCreteNewUser(req, res) {

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

    return res.status(201).json({ msg: "success", id: result._id });


}



module.exports = {
    handelGetAllUser,
    handleGetUserById,
    handleUpdateUser,
    handeleDeleted,
    handleCreteNewUser,
}