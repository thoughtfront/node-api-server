const knex = require('knex')
const config = require('../index')

if (config.env === 'development') {
  const db = knex({
    client: 'postgresql',
    connection: {
      host     : config.databaseUrl,
      user     : config.databaseUser,
      password : config.databasePassword
    }
  })

  db.raw(`DROP DATABASE ${config.databaseName}`)
    .then(function() {
      db.destroy();
    });
}