const express = require("express")
const app = express();
const mongoose = require("mongoose");
const {MongoClient, ServerApiVersion } = require ('mongodb');
const cors = require("cors");
app.use(cors());
app.use(express.json());
const bcrypt  = require("bcryptjs");

const jwt = require("jsonwebtoken");

const JWT_SECRET = ":)"

const mongoUrl = ";)";

mongoose.connect(mongoUrl, {
    useNewUrlParser:true
}).then(() => {
    console.log("Connected to db.");
})
.catch(e=>console.log(e));

const Quote = mongoose.model("Quotes")
const Message = mongoose.model("ContactUs")
const User = mongoose.model("UserInfo");
app.post("/register",async (req,res) => {
    const {fname, lname, email, password} = req.body;
// Hide user password from db admin.
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        // if this user exists or not. Ensure No Duplicates.
        const oldUser = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
//add return so that if old user exists it wont execute bottom .
        if (oldUser) {
            return res.send({ error: "User Exists"});
        }
      await User.create({
       /*** **
        * 
        * ;)
        * 
        * 
       */
     });
        res.send({ status: "Account Created" });
    } catch (error) {
        res.send({ status: "Something is wrong, try again." })
    }
});

app.post("/login",async (req,res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
    if (!user) {
        return res.json({ error: "User does not exist."});
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, JWT_SECRET);
//successful request
        if (res.status(201)) {
            return res.json({ status: "Logging in...", data: token });
        } else {
            return res.json({ error: "Error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password"});
})


app.post("/contactus",async (req,res) => {
    const { name, email, message } = req.body;
    try {
     await Message.create({
        name,
        email,
        message,
     });
        res.send({ status: "Message created" });
    } catch (error) {
        res.send({ status: "Something is wrong, try again." })
    }
})

app.post("/quote",async (req,res) => {
    const { name, email, number, zipcode, gallons,  date } = req.body;
    try {
     await Quote.create({
        name,
        email,
        number,
        zipcode,
        gallons,
        date,
     });
        res.send({ status: "Quote Request Generated" });
    } catch (error) {
        res.send({ status: "Something is wrong, try again." })
    }
})


app.listen(5000, () => {
    console.log("Server Started");
});