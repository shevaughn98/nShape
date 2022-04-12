/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Workouts').del()
  await knex('Workouts').insert([
    // Arm
    {workout_type: 'Arm', workout_name: 'Push-ups', reps: 3, number_per_reps: 15, youtube_link: "https://www.youtube.com/watch?v=IODxDxX7oi4"},
    {workout_type: 'Arm', workout_name: 'Triceps Dips', reps: 2, number_per_reps: 8, youtube_link: "https://www.youtube.com/watch?v=6kALZikXxLc"},
    {workout_type: 'Arm', workout_name: 'Mountain Climber', reps: 2, number_per_reps: 15, youtube_link: "https://www.youtube.com/watch?v=nmwgirgXLYM"},
    {workout_type: 'Arm', workout_name: 'Arm Circles', reps: 1, number_per_reps: 30, youtube_link: "https://www.youtube.com/watch?v=bP52FXTlzjA"},
    // Abs
    {workout_type: 'Abs', workout_name: 'Abdominal Crunches', reps: 2, number_per_reps: 10, youtube_link: "https://www.youtube.com/watch?v=6BvYD6yw2QE"},
    {workout_type: 'Abs', workout_name: 'Sit Ups', reps: 2, number_per_reps: 13, youtube_link: "https://www.youtube.com/watch?v=1fbU_MkV7NE"},
    {workout_type: 'Abs', workout_name: 'Leg Raises', reps: 2, number_per_reps: 15, youtube_link: "https://www.youtube.com/watch?v=JB2oyawG9KI"},
    {workout_type: 'Abs', workout_name: 'Glute Bridge', reps: 2, number_per_reps: 7, youtube_link: "https://www.youtube.com/watch?v=wPM8icPu6H8"},
    // Full Body
    {workout_type: 'Full Body', workout_name: 'Side Lunges', reps: 2, number_per_reps: 10, youtube_link: "https://www.youtube.com/watch?v=rvqLVxYqEvo"},
    {workout_type: 'Full Body', workout_name: 'Wall Push-ups', reps: 2, number_per_reps: 17, youtube_link: "https://www.youtube.com/watch?v=b01muAD0_NI"},
    {workout_type: 'Full Body', workout_name: 'Step-up Onto Chair', reps: 2, number_per_reps: 10, youtube_link: "https://www.youtube.com/watch?v=aajhW7DD1EA"},
    {workout_type: 'Full Body', workout_name: 'Squats', reps: 2, number_per_reps: 10, youtube_link: "https://www.youtube.com/watch?v=aclHkVaku9U"},
    // Legs
    {workout_type: 'Legs', workout_name: 'Crusty Lunges', reps: 2, number_per_reps: 10, youtube_link: "https://www.youtube.com/watch?v=Ix_SFZVDy0I"},
    {workout_type: 'Legs', workout_name: 'Pile Squats', reps: 2, number_per_reps: 5, youtube_link: "https://www.youtube.com/watch?v=FPeq0s4jDxw"},
    {workout_type: 'Legs', workout_name: 'Bottom Leg Lift Left', reps: 3, number_per_reps: 15, youtube_link: "https://www.youtube.com/watch?v=Dm1GSX1vItY"},
    {workout_type: 'Legs', workout_name: 'Side-Lying Leg Lift Right', reps: 2, number_per_reps: 10, youtube_link: "https://www.youtube.com/watch?v=jgh6sGwtTwk"}
  ]);

  await knex('Users').del()  
  await knex('Users').insert([
    {birthday: '2008-11-11', email: "example@gmail.com", gender: 'male', height: 180.34, name: 'John Doe', password: 'password', username: "Example_User", weight: 135},
    {birthday: '2008-11-11', email: "example@gmail.com", gender: 'female', height: 180.34, name: 'Mary Jane', password: 'password', username: "Example_User", weight: 135}
  ]);

  await knex('Goals').del()  
  await knex('Goals').insert([
    {title: 'Running', description: 'Run 3 laps around the park'}, {title: 'Food', description: 'Eat homemade food for a week'}, {title: 'Possibility', description: 'Try a new diet out'}, {title: 'Nature', description: 'Camp out in the woods for three nights'}
  ]);
};
