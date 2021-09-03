const router = require("express").Router();
const { Workout } = require("../models/workout");



router.get('/api/workouts', async (req, res) => {
try {
    const workoutInfo = Workout.find()
    res.json(workoutInfo)
} catch (e) {
    res.josn(e);
}

})

router.put('/api/workouts/:id', async (req, res) => {
    const {
        exercise,
    } = req.body;  
    try {
    const updateWorkout = await Workout.findByIdAndUpdate(req.params.id,{
        $addToSet: {
            exercises: [ exercise],
        }, 
    }, {
        new: true,
    });
    res.json(updateWorkout)
    } catch (e) {
        res.json(e);
    }
});

router.post('/api/workouts', async (req, res) => {
    const {
        exercise,
    } = req.body;

    try {
        const newWorkout = await Workout.create({
            exercises: [ exercise]
        });
        res.json(newWorkout);
    } catch (e) {
        res.json(e);
    }
});

router.get('/api/workouts/range', async (req, res) => {
    try {
        const workoutInfo = Workout.find()
        res.json(workoutInfo)
    } catch (e) {
        res.josn(e);
    }
});
module.exports = router;


