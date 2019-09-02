exports.up = async function(knex) {
  await knex.schema.table("note", function(t) {
    t.integer("master_lesson_id").unsigned();
    t.foreign("master_lesson_id").references("master_lesson.id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("note", async t => {
    await t.dropForeign("master_lesson_id");
    await t.dropColumn("master_lesson_id");
  });
};
