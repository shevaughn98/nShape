const pool = require('../database');

class Workout {
    static async findAllWorkouts() {
        const databaseResult = await pool.query('SELECT * FROM workouts')
        
        return databaseResult.rows;
    }

    static async findAllArmWorkouts() {
        const databaseResult = await pool.query(`SELECT * FROM workouts WHERE workouts::text ilike '%Arm%'`)
        return databaseResult.rows;
    }

    static async findAllAbWorkouts() {
        const databaseResult = await pool.query(`SELECT * FROM workouts WHERE workouts::text ilike '%abs%'`)
        return databaseResult.rows;
    }

    static async viewAllFullBodyWorkouts() {
        const databaseResult = await pool.query(`SELECT * FROM workouts WHERE workouts::text ilike '%full%'`)
        return databaseResult.rows;
    }

    static async viewAllLegWorkouts() {
        const databaseResult = await pool.query(`SELECT * FROM workouts WHERE workouts::text ilike '%legs%'`)
        return databaseResult.rows;
    }
}

module.exports = Workout;