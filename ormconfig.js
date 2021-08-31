module.exports = {
    'type': 'postgres',
    'host': `${process.env.PSQL_HOST}`,
    'port': Number(process.env.PSQL_PORT),
    'username': 'postgres',
    'password': `${process.env.PSQL_PASSWORD}`,
    'database': `${process.env.PSQL_DB}`,
    'logging': false,
    'entities': [
      `${process.env.CODE_DIR}/database/entities/*.${process.env.CODE_EXT}`,
    ],
    'migrations': [
      `${process.env.CODE_DIR}/database/migrations/*.${process.env.CODE_EXT}`,
    ],
    'cli': {
      'entitiesDir': 'src/database/entities',
      'migrationsDir': 'src/database/migrations',
    },
  };
  