// Router Creation
const express = require('express');
const router = express.Router();

// Importing Controller
const { viewAllGoals, createGoal, viewParticularGoal, updateGoalInformation, deleteGoal, markGoalAsCompleted } = require('../controllers/goalsController')

// Route Pathing
// /goals
router.get('/', viewAllGoals)
.post('/', createGoal)

// /goals:id
router.route('/:id')
.get(viewParticularGoal) 
.put(updateGoalInformation) 
.delete(deleteGoal)

// /goals:id/complete
router.patch('/:id/complete', markGoalAsCompleted)

module.exports = router;