// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/new.db.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

  // pool: {
  //   afterCreate: (conn, done) => {
  //     // runs after a connection is made to the sqlite engine
  //     conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
  //   }
  // },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./db/test.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    },
    pool: {
      min: 0,
      max: 6,
      createTimeoutMillis: 3000,
      acquireTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
      propagateCreateError: false
    },
  }
};
