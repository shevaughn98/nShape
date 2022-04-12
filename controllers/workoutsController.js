const Workout = require('../models/Workouts')

// GET
async function viewAllWorkouts(req, res) {
    try {
        const allWorkouts = await Workout.findAllWorkouts();

        res.status(200).json(allWorkouts)
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

// GET
async function viewAllArmWorkouts(req, res) {
    try {
        const allArmWorkouts = await Workout.findAllArmWorkouts();

        res.status(200).json(allArmWorkouts)
    } catch (err) {
        res.status(500).send({message: err.message});
    }    
}

// GET
async function viewAllAbWorkouts(req, res) {
    try {
        const allWorkouts = await Workout.findAllAbWorkouts();

        res.status(200).json(allWorkouts)
    } catch (err) {
        res.status(500).send({message: err.message});
    }   
}

// GET
async function viewAllFullBodyWorkouts(req, res) {
    try {
        const allWorkouts = await Workout.viewAllFullBodyWorkouts();

        res.status(200).json(allWorkouts)
    } catch (err) {
        res.status(500).send({message: err.message});
    }     
}

// GET
async function viewAllLegWorkouts(req, res) {
    try {
        const allWorkouts = await Workout.viewAllLegWorkouts();

        res.status(200).json(allWorkouts)
    } catch (err) {
        res.status(500).send({message: err.message});
    }      
}

module.exports = {
    viewAllWorkouts,
    viewAllArmWorkouts,
    viewAllAbWorkouts,
    viewAllFullBodyWorkouts,
    viewAllLegWorkouts
}