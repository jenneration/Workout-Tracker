const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
      
      type: {
        type: String,
        required: "String is required"
      },
      
      name: {
        type: String,
        trim: true,
        required: "String is required"
      },

      distance: {
        type: Number
      },

      duration: {
        type: Number
      },

      weight: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      reps: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

