/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Users', table => {
      table.increments('user_id');
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('name').notNullable();
      table.date('birthday').notNullable();
      table.string('email').notNullable();
      table.integer('weight').notNullable();
      table.decimal('height').notNullable();
      table.string('gender').notNullable();
      table.foreign('workouts_id').references('workouts_id');
      table.foreign('goals_id').references('goals_id');
  })
    .createTable('Workouts', table => {
        table.increments('workouts_id');
        table.string('workout_type').notNullable();
        table.string('workout_name').notNullable();
        table.integer('reps').notNullable();
        table.integer('number_per_reps').notNullable();
        table.string('youtube_link').notNullable();
    })
    .createTable('Goals', table => {
        table.increments('goals_id');
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.boolean('completed').defaultTo(false);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Users').dropTable('Workouts').dropTable('Goals')
};
