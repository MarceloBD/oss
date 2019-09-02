exports.up = async function(knex) {
  await knex.schema.createTable("questionnaire", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('questionnaire');
};
