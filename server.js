const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"))

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workouts",
    {   useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });

// routes
const api = require("./routes/api-routes.js");
const html = require("./routes/html-routes.js");
app.use(api);
app.use(html)


// server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});