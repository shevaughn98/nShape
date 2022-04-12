// Imports
const express = require('express');

// Server Creation
const app = express();

// Port
const PORT = 8085;

// Middleware
app.use(express.json());

// Routers
const usersRouter = require('./routers/usersRouter');
const goalsRouter = require('./routers/goalsRouter');
const workoutsRouter = require('./routers/workoutsRouter')

app.use('/users', usersRouter);
app.use('/goals', goalsRouter);
app.use('/workouts', workoutsRouter);

// Server Listening
app.listen(PORT, ()=>{
    console.log(`Jamming on http://localhost:${PORT}`);
})