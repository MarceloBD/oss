exports.up = async function(knex) {
  await knex.schema.createTable("note", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.text("text");

    t.integer("lesson_id").unsigned();
    t.foreign("lesson_id").references("lesson.id");

    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);
    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("note", async t => {
    await t.dropForeign("lesson_id");
    await t.dropColumn("lesson_id");

    await t.dropForeign("user_id");
    await t.dropColumn("user_id");
  });
  await knex.schema.dropTableIfExists("note");
};
