import { knex as setupKnex } from 'knex'

const knex = setupKnex({
  client: 'sqlite3',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
})

export { knex }
