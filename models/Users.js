const pool = require('../database');

// Table: Users
class User {
    static async findAllUsers() {
        const databaseResult = await pool.query('SELECT * FROM "Users" ORDER BY user_id');
        return databaseResult.rows;
    }

    static async verifiedUser(username, password) {
        const databaseResult = await pool.query('SELECT * FROM "Users" WHERE username = $1 AND password = $2', [username, password]);
        return databaseResult.rows[0];
    }

    static async createUser(birthday, email, gender, height, password, username, weight, name) {
        const databaseResult = await pool.query('INSERT into "Users" (birthday, email, gender, height, name, password, username, weight) values ($1, $2, $3, $4, $5, $6, $7, $8)', [birthday, email, gender, height, password, username, weight, name]);
        return databaseResult.rows;
    }

    static async selectedUser(user_id) {
        const databaseResult = await pool.query('SELECT * FROM "Users" WHERE user_id = $1', [user_id])
        return databaseResult.rows[0];
    }

    static async updateUserInfo(birthday, email, gender, height, password, username, weight, user_id) {
        await pool.query('UPDATE "Users" SET birthday = $1, email = $2, gender = $3, height = $4, password = $5, username = $6, weight = $7', [birthday, email, gender, height, password, username, weight]);

        const databaseResult = pool.query('SELECT * FROM "Users" WHERE id = $1', [user_id])
        return databaseResult.rows[0];
    }
}

module.exports = User;