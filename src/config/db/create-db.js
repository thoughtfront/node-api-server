const knex = require('knex')
const config = require('../index')

const db = knex({
  client: 'postgres',
  connection: {
    host     : config.databaseUrl,
    user     : config.databaseUser,
    password : config.databasePassword
  }
})

db.raw(`CREATE DATABASE ${config.databaseName}`)
  .then(function() {
    db.destroy();
  });