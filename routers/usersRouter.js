// Router Creation
const express = require('express');
const router = express.Router();

// Importing Controller
const { viewAllUsers, getParticularUser, authenticateUser, createUser, updateUserInfo } = require('../controllers/usersController')

// Route Pathing
// /users
router.get('/', viewAllUsers)
// /users/signin
.post('/signin', authenticateUser)
// /users/signup
.post('/signup', createUser)
 
// /users:id
router.route('/:id')
.get(getParticularUser)
.put(updateUserInfo)

module.exports = router;
