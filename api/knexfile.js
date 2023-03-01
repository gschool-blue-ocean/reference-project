export default {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: new URL("./src/db/migrations", import.meta.url).pathname,
    },
    seeds: {
      directory: new URL("./src/db/seeds", import.meta.url).pathname,
    },
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: new URL("./src/db/migrations", import.meta.url).pathname,
    },
    seeds: {
      directory: new URL("./src/db/seeds", import.meta.url).pathname,
    },
    useNullAsDefault: true,
  },
};
