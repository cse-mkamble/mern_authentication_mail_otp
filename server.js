const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const HttpStatus = require("http-status-codes");

// read .env file into environment
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;

// allow cross origin resource sharing for react app
app.use(cors());

// configure bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to mongodb using monogoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('============== Mongodb Database Connected Successfully ==============')
}).catch((error) => {
    console.log('============== Database Not Connected ==============')
})

// user routes
const userRouter = require("./src/routes/user.routes");
app.use("/user", userRouter);

// any routes that does not match above
app.get("*", (req, res) => {
    res.status(HttpStatus.NOT_FOUND).json({ message: "Route Not Found." });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
