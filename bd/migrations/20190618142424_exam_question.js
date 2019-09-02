exports.up = async function(knex) {
  await knex.schema.createTable("exam_question", async function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("exam_id").unsigned();
    t.foreign("exam_id").references("exam.id");

    t.integer("question_id").unsigned();
    t.foreign("question_id").references("question.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("exam_question", async t => {
    await t.dropForeign("exam_id");
    await t.dropColumn("exam_id");

    await t.dropForeign("question_id");
    await t.dropColumn("question_id");
  });
  await knex.schema.dropTableIfExists("exam_question");
};
