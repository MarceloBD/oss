exports.up = async function(knex) {
  await knex.schema.createTable("alternative", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("letter");
    t.integer("order");
    t.text("description");

    t.integer("question_id").unsigned();
    t.foreign("question_id").references("question.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });

  await knex.schema.table("question", t => {
    t.integer("correct_alternative_id").unsigned();
    t.foreign("correct_alternative_id").references("alternative.id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("question", t => {
    t.dropForeign("correct_alternative_id");
    t.dropColumn("correct_alternative_id");
  });
  await knex.schema.table("alternative", t => {
    t.dropForeign("question_id");
    t.dropColumn("question_id");
  });
  await knex.schema.dropTableIfExists("alternative");
};
