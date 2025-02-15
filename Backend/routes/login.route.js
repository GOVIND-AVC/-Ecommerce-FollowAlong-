const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { userModel } = require('../model/user.model');

require('dotenv').config();

let loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await userModel.findOne({ email });

        if (user) {
            let hashedPassword = user.password;
            bcrypt.compare(password, hashedPassword, function (err, result) {
                if (err) {
                    return res.status(500).send({ "msg": "Error comparing passwords" });
                }
                if (result) {
                    let token = jwt.sign({ "userID": user._id }, process.env.SECRET_KEY);
                    res.send({ "msg": "Login Successful", "token": token });
                } else {
                    res.send({ "msg": "Invalid Password" });
                }
            });
        } else {
            res.send({ "msg": "Invalid Email" });
        }
    } catch (error) {
        res.status(500).json({ "Message": "Something went wrong!" });
    }
});

module.exports = { loginRouter };