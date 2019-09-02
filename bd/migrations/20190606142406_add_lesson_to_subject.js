exports.up = async function(knex) {
  await knex.schema.table("subject", function(t) {
    t.integer("lesson_id").unsigned();
    t.foreign("lesson_id").references("lesson.id");
  });
};

exports.down = async function(knex) {
  await knex.schema.table("subject", async t => {
    await t.dropForeign("lesson_id");
    await t.dropColumn("lesson_id");
  });
};
