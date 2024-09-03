const express = require("express");
const {handelGetAllUser,handleGetUserById,handleUpdateUser,handeleDeleted,handleCreteNewUser} = require('../controller/user');

const router = express.Router();


router.route("/")
      .get(handelGetAllUser)
      .post(handleCreteNewUser);
 
//Dynamic routes
router.route("/:id")
      .get(handleGetUserById)
    .patch(handleUpdateUser)
    .delete(handeleDeleted);

module.exports = router;