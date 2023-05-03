const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "postgres",
  },
})

const createDatabase = async (databaseName) => {
  try {
    const result = await knex.raw(
      `SELECT 1 FROM pg_database WHERE datname = '${databaseName}'`
    )
    if (result.rows.length === 0) {
      await knex.raw(`CREATE DATABASE ${databaseName};`)
      console.log(`Database "${databaseName}" created successfully.`)
    } else {
      console.log(`Database "${databaseName}" already exists.`)
    }
  } catch (err) {
    console.error(`Error creating database "${databaseName}": ${err.message}`)
  } finally {
    await knex.destroy()
  }
}

const deleteDatabase = async (databaseName) => {
    try {
        const result = await knex.raw(
            `SELECT 1 FROM pg_database WHERE datname = '${databaseName}'`
        )
        if (result.rows.length === 1) {
            await knex.raw(`DROP DATABASE ${databaseName};`)
            console.log(`Database "${databaseName}" deleted successfully.`)
        } else {
            console.log(`Database "${databaseName}" does not exist.`)
        }
    } catch (err) {
        console.error(`Error deleting database "${databaseName}": ${err.message}`)
    } finally {
        await knex.destroy()
    }
}



// deleteDatabase("recipes")
createDatabase("recipes")
