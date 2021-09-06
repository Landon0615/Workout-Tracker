const router = require("express").Router();
const { Workout } = require("../models");

router.get("/workouts", async (req, res) => {
  try {
    const workout = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercise.duration" } } },
    ]);
    res.json(workout);
  } catch (e) {
    res.json(e);
  }
});

router.put("/workouts/:id", async ({ body, params }, res) => {
  try {
    const updateWorkout = await Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    );

    res.json(updateWorkout);
  } catch (e) {
    res.json(e);
  }
});

router.post("/workouts", async (req, res) => {
  try {
    const newWorkout = await Workout.create({});
    res.json(newWorkout);
  } catch (e) {
    res.json(e);
  }
});

router.get("/workouts/range", async (req, res) => {
  try {
    const workoutRange = await Workout.aggregate([
      { $addFields: { totalDuration: { $sum: "$exercise.duration" } } },
    ]);
    res.json(workoutRange);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;



