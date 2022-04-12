const User = require('../models/Users')
// GET
async function viewAllUsers(req, res) {
    try {
        const viewUsers = await User.findAllUsers();

        res.status(200).json({
            usersData: viewUsers
        });
    } catch (err) {
        res.status(500).send({message: err.message});
    }
}

// GET
async function getParticularUser(req, res) {
    const id = req.params.id

    try {
        const getUser = await User.selectedUser(id);
        res.status(200).json(getUser);
    } catch (err) {
        res.status(404).send({message: err.message});
    }
}

// POST
async function authenticateUser(req, res) {
    const username = req.body.username
    const password = req.body.password

    try {
        const verifiedUser = await User.verifiedUser(username, password)
        res.status(200).json(verifiedUser).send({message: "All Clear"})
    } catch (err) {
        res.status(400).send({message: err.message});
    }
}

// POST
async function createUser(req, res) {
    const { birthday, email, gender, height, password, username, weight, name } = req.body

    if (!birthday || !email || !gender || !height || !password || !username || !weight, !name) {
        res.status(400).json({message: "Body is incomplete"})
    }

    try {
        const createUser = await User.createUser(birthday, email, gender, height, password, username, weight, name)

        res.status(200).json(createUser)
    } catch (err) {
        res.status(404).send({message: err.message})
    }
}

// PUT
async function updateUserInfo(req, res) {
    
}

module.exports = {
    viewAllUsers,
    getParticularUser,
    authenticateUser,
    createUser,
    updateUserInfo
}