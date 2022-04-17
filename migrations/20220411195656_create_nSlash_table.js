/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
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
    .createTable('workouts', table => {
        table.increments('workouts_id');
        table.string('type').notNullable();
        table.string('name').notNullable();
        table.integer('reps').notNullable();
        table.integer('repsrepetition').notNullable();
        table.string('video').notNullable();
    })
    .createTable('goals', table => {
        table.increments('goals_id');
        table.string('description').notNullable();
        table.boolean('completed').defaultTo(false);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users').dropTable('workouts').dropTable('goals')
};
