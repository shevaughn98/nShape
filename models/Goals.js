const pool = require('../database');

class Goal {
    static async findAllGoal() {
        const databaseResult = await pool.query(`SELECT * FROM goals ORDER BY goals_id`);

        return databaseResult.rows
    }

    static async createGoal(title, description) {
        const databaseResult = await pool.query(`INSERT into goals (title, description) values ($1, $2) returning *`, [title, description]);

        return databaseResult.rows[0];  
    }

    static async findParticularGoal(id) {
        const databaseResult = await pool.query(`SELECT * FROM goals WHERE goals_id = $1`, [id]);

        return databaseResult.rows[0]  
    }

    static async updateGoal(id, description, title) {
        await pool.query(`UPDATE goals SET description = $2, title = $3 WHERE goals_id = $1`, [id, description, title]);

        const databaseResult = await pool.query(`SELECT * FROM goals WHERE goals_id = $1`, [id])

       return databaseResult.rows;    
    }

    static async deleteGoal(id) {
        const databaseResult = await pool.query(`DELETE FROM goals WHERE goals_id = $1`, [id]);
        return databaseResult.rows[0];
    }

    static async goalComplete(id) {
      await pool.query(`UPDATE goals SET completed = TRUE WHERE goals_id = $1`, [id])

      const databaseResult = await pool.query(`SELECT * FROM goals WHERE goals_id = $1`, [id])

      return databaseResult.rows;
    }
}

module.exports = Goal;

