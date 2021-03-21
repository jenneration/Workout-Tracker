const express = require("express");
const router = express.Router();
const db = require("../models");

// Create new workout 
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("Add exercise works");
    db.Workout.findByIdAndUpdate(params.id,
        { $push: { exercise: body }},
        { new: true })
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err);

        });
});



module.exports = router;