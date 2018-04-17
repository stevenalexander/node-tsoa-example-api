import * as path from 'path'

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: process.env.DB_PATH || path.join(__dirname, '../users.sqlite3')
    }
  }
}
