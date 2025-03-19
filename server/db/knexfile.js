module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './db/event-planner.sqlite3'
      },
      useNullAsDefault: true
    }
  };