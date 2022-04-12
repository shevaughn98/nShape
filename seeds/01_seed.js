/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Populate the Workouts table
  await knex('workouts').del()
  await knex('workouts').insert([
    // Arm
    {type: 'arm', name: 'push-ups', reps: 3, repsrepetition: 15, video: "https://www.youtube.com/watch?v=IODxDxX7oi4"},
    {type: 'arm', name: 'triceps dips', reps: 2, repsrepetition: 8, video: "https://www.youtube.com/watch?v=6kALZikXxLc"},
    {type: 'arm', name: 'mountain climber', reps: 2, repsrepetition: 15, video: "https://www.youtube.com/watch?v=nmwgirgXLYM"},
    {type: 'arm', name: 'arm circles', reps: 1, repsrepetition: 30, video: "https://www.youtube.com/watch?v=bP52FXTlzjA"},
    // Abs
    {type: 'abs', name: 'abdominal crunches', reps: 2, repsrepetition: 10, video: "https://www.youtube.com/watch?v=6BvYD6yw2QE"},
    {type: 'abs', name: 'sit ups', reps: 2, repsrepetition: 13, video: "https://www.youtube.com/watch?v=1fbU_MkV7NE"},
    {type: 'abs', name: 'leg raises', reps: 2, repsrepetition: 15, video: "https://www.youtube.com/watch?v=JB2oyawG9KI"},
    {type: 'abs', name: 'glute bridge', reps: 2, repsrepetition: 7, video: "https://www.youtube.com/watch?v=wPM8icPu6H8"},
    // Full Body
    {type: 'full body', name: 'side lunges', reps: 2, repsrepetition: 10, video: "https://www.youtube.com/watch?v=rvqLVxYqEvo"},
    {type: 'full body', name: 'wall push-ups', reps: 2, repsrepetition: 17, video: "https://www.youtube.com/watch?v=b01muAD0_NI"},
    {type: 'full body', name: 'step-up onto chair', reps: 2, repsrepetition: 10, video: "https://www.youtube.com/watch?v=aajhW7DD1EA"},
    {type: 'full body', name: 'squats', reps: 2, repsrepetition: 10, video: "https://www.youtube.com/watch?v=aclHkVaku9U"},
    // Legs
    {type: 'legs', name: 'crusty lunges', reps: 2, repsrepetition: 10, video: "https://www.youtube.com/watch?v=Ix_SFZVDy0I"},
    {type: 'legs', name: 'pile squats', reps: 2, repsrepetition: 5, video: "https://www.youtube.com/watch?v=FPeq0s4jDxw"},
    {type: 'legs', name: 'bottom leg lift left', reps: 3, repsrepetition: 15, video: "https://www.youtube.com/watch?v=Dm1GSX1vItY"},
    {type: 'legs', name: 'side-lying leg lift right', reps: 2, repsrepetition: 10, video: "https://www.youtube.com/watch?v=jgh6sGwtTwk"}
  ]);

  // Populate the Users table
  await knex('users').del()  
  await knex('users').insert([
    {birthday: '2008-11-11', email: "example@gmail.com", gender: 'male', height: 180.34, name: 'John Doe', password: 'pass', username: "example", weight: 135},
    {birthday: '2008-11-11', email: "example@gmail.com", gender: 'female', height: 180.34, name: 'Mary Jane', password: 'password', username: "exampleuser", weight: 135}
  ]);

  // Populate the Goals table
  await knex('goals').del()  
  await knex('goals').insert([
    {title: 'running', description: 'run 3 laps around the park'}, {title: 'food', description: 'eat homemade food for a week'}, {title: 'possibility', description: 'try a new diet out'}, {title: 'nature', description: 'camp out in the woods for three nights'}
  ]);
};
