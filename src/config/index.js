module.exports = {
  env: process.env.ENVIRONMENT,
  databaseName: process.env.DATABASE_NAME,
  databaseUrl: process.env.DATABASE_URL,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  port: process.env.PORT || '3000',
};
