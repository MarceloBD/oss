const defaultConfig = {
  migrations: {
    directory: '../db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: '../db/seeds',
  },
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

module.exports = {
  DEVELOPMENT: {
    ...defaultConfig,
  },
  HOMOLOG: {
    ...defaultConfig,
  },
  PRODUCTION: {
    ...defaultConfig,
  },
};
