const express = require('express');
const bcrypt = require('bcrypt');
const { userModel } = require('../model/user.model');

require('dotenv').config();

let signupRouter = express.Router();

signupRouter.post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const userPresent = await userModel.findOne({ email });
    if (userPresent?.email) {
        res.send("Try logging in, already exist");
    } else {
        try {
            bcrypt.hash(password, 10, async function (err, hash) {
                const user = new userModel({ name, email, password: hash });
                await user.save();
                res.send("Sign up successful");
            });
        } catch (error) {
            console.log(err);
            res.send("Something went wrong, please try again later");
        }
    }
});

module.exports = { signupRouter };