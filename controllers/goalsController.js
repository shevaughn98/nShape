const Goal = require('../models/Goals')
const pool = require('../database')

// GET
async function viewAllGoals(req, res) {
    try {
        const allGoal = await Goal.findAllGoal();

        res.status(200).json(allGoal);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

// POST
async function createGoal(req, res) {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'No title or description was provided' })
    }

    try {
        const newGoal = await Goal.createGoal(title, description)

        res.status(201).json(newGoal)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// GET
async function viewParticularGoal(req, res) {
    const id = req.params.id

    try {
        const findParticularTask = await Goal.findParticularGoal(id);

        res.status(200).json(findParticularTask)

    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// PUT
async function updateGoalInformation(req, res) {
    const id = req.params.id
    const { title, description } = req.body

    const findGoal = await pool.query(`SELECT * FROM goals WHERE goals_id = $1`, [id]);

    if (findGoal.rows.length === 0) {
        return res.status(404).json({ message: 'Goal not found' })
    }

    if (!title) {
        return res.status(400).json({ message: 'Title is incomplete' })
    }

    if (!description) {
        return res.status(400).json({ message: 'Description is incomplete' })
    }

    try {
        const updateGoalInformation = await Goal.updateGoal(id, description, title)

        res.status(200).json(updateGoalInformation)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// DELETE
async function deleteGoal(req, res) {
    const id = req.params.id;

    if (!id) {
        return res.status(404).json({ message: 'Goal not found' })
    }

    try {
        await Goal.deleteGoal(id);

        const getAllGoal = await Goal.findAllGoal()

        res.status(200).json({
            data: getAllGoal
        })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

// PATCH
async function markGoalAsCompleted(req, res) {
    const id = req.params.id;

    const findGoal = await pool.query(`SELECT * FROM goals WHERE goals_id = $1`, [id]);

    if (findGoal.rows.length === 0) {
        return res.status(404).json({ message: 'Goal not found' })
    }

    try {
        const markGoalAsCompleted = await Goal.goalComplete(id);

        res.status(200).json(markGoalAsCompleted)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = {
    viewAllGoals,
    createGoal,
    viewParticularGoal,
    updateGoalInformation,
    deleteGoal,
    markGoalAsCompleted
}