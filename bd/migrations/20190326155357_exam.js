exports.up = async function(knex) {
  await knex.schema.createTable("exam", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("description");

    t.integer("questionnaire_id")
      .unsigned()
      .unique();
    t.foreign("questionnaire_id").references("questionnaire.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("exam", async t => {
    await t.dropForeign("questionnaire_id");
    await t.dropColumn("questionnaire_id");
  });
  await knex.schema.dropTableIfExists("exam");
};
