const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { userModel } = require('./model/user.model');
const cors = require('cors');
const { productRouter } = require('./routes/product.route');
const { loginRouter } = require("./routes/login.route");
const { signupRouter } = require("./routes/signup.route");

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

let connection = mongoose.connect(process.env.mongoURL);

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.post("/create", async (req, res) => {
    let payLoad = req.body;
    const hashedPassword = await bcrypt.hash(payLoad.password, 10);
    payLoad.password = hashedPassword;

    try {
        let new_user = new userModel(payLoad);
        await new_user.save();
        res.send({ "message": "Hurray! Successfully saved the user to the database" });
    } catch (error) {
        console.log(error);
        res.send({ "error": error });
    }
});

app.use(signupRouter);
app.use(loginRouter);
app.use("/product", productRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log(error);
    }

    console.log(`Serverr is running on- http://localhost:${process.env.PORT}`);
});