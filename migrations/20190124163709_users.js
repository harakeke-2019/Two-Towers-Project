exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('star_sign')
    table.string('gang')
    table.string('chapter')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
