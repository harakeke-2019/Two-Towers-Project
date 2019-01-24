
exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('title')
    table.string('description')
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings')

};
