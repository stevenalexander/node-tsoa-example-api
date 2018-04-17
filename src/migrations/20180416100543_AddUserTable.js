
exports.up = function (knex, Promise) {
  return knex.schema.createTable('User', function (table) {
    table.increments('userId').unique()
    table.string('name')
    table.string('email')
    table.string('phoneNumbers')
    table.string('status')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('User')
}
