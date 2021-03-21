const express = require("express")
const router = express.Router();
const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
    console.log("This is exercise.html");
});

router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
    console.log("This is index.html");
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
    console.log("This is stats.html");
});



module.exports = router;