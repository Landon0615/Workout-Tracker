const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    day: { type: Date, default: Date.now },

    exercise: [
        {
            type: {
                type: String,
                required: true
            },
            name: { 
                type: String, 
                required: true 
            },
            duration: { 
                type: Number,
                required: true
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]

});

const workout = mongoose.model('Workout', workoutSchema);
module.exports = workout;