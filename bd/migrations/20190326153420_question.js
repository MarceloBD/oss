exports.up = async function(knex) {
  await knex.schema.createTable("question", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.text("description");
    t.integer("order");

    t.integer("questionnaire_id").unsigned();
    t.foreign("questionnaire_id").references("questionnaire.id");
    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("question", async t => {
    await t.dropForeign("questionnaire_id");
    await t.dropColumn("questionnaire_id");
  });
  await knex.schema.dropTableIfExists("question");
};
