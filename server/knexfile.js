const defaultConfig = {
  migrations: {
    directory: '../prisma/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: '../prisma/seeds',
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
