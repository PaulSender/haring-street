const { faker } = require("@faker-js/faker")

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("company_list", function (table) {
      table.increments("id")
      table.string("company_name", 255).notNullable()
      table.string("company_phrase", 255).notNullable()
      table.string("company_adjective", 255).notNullable()
      table.string("company_buzzword", 255).notNullable()
    })
    .then(function () {
      const fakedCompanyList = []
        for (let i = 0; i < 10000; i++) {
            fakedCompanyList.push({
                company_name: faker.company.name(),
                company_phrase: faker.company.catchPhrase(),
                company_adjective: faker.company.bsAdjective(),
                company_buzzword: faker.company.bsBuzz()
            })
        }
      return knex("company_list").insert(fakedCompanyList)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("company_list")
}
