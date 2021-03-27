const express = require("express");
const router = express.Router();
const db = require("../models");

// Create new workout 
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            //console.log(dbWorkout);
            console.log("CREATED DB")
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err)
        });
});

// Add exercise(s) to current workout 



// Update current workout with new exercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id,
        { $push: { exercise: body }},
        { new: true })
        .then((dbWorkout) => {
            //console.log(dbWorkout);
            console.log("ADD EX TO CURRENT DB");
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err);
        });
});


//Show current workout
router.get("/api/workouts/:id", (req, res) => {
    db.Workout.find()
        .then((dbWorkout) => {
            //console.log(dbWorkout)
            console.log("SHOW CURRENT COLLECTION")
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err);
        });
});



module.exports = router;