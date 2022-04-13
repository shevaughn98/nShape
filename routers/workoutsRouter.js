// Router Creation
const express = require('express');
const cors = require('cors')
const router = express.Router();

router.use(cors());

// Importing Controller
const { viewAllWorkouts, viewAllArmWorkouts, viewAllAbWorkouts, viewAllFullBodyWorkouts, viewAllLegWorkouts } = require('../controllers/workoutsController')

// Route Pathing
// /workouts
router.get('/', viewAllWorkouts)
// /workouts/arms
.get('/arms', viewAllArmWorkouts)
// /workouts/abs
.get('/abs', viewAllAbWorkouts)
// /workouts/fullbody
.get('/fullbody', viewAllFullBodyWorkouts)
// /workouts/legs
.get('/legs', viewAllLegWorkouts)

module.exports = router;