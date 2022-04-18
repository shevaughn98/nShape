// Router Creation
const express = require('express');
const router = express.Router();
const cors = require('cors');
const authCheck = require("../middleware/checkAuth");

router.use(cors());

// Importing Controller
const { viewAllUsers, getParticularUser, authenticateUser, createUser, updateUserInfo } = require('../controllers/usersController')

// importing Controller



// Route Pathing
// /users
router.get('/', authCheck,  viewAllUsers)
// /users/signin
.post('/signin', authenticateUser) // ==> This requires more knowledge, ignore this route for now
// /users/signup
.post('/signup', createUser)
 
// /users:id
router.route('/:id')
.get(getParticularUser)
.put(updateUserInfo)

module.exports = router;
