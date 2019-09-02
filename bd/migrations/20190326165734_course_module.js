exports.up = async function(knex) {
  await knex.schema.createTable("course_module", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("course_id").unsigned();
    t.foreign("course_id").references("course.id");

    t.integer("module_id").unsigned();
    t.foreign("module_id").references("module.id");

    t.integer("order");
    t.timestamp("availability_date");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("course_module", async t => {
    await t.dropForeign("course_id");
    await t.dropColumn("course_id");

    await t.dropForeign("module_id");
    await t.dropColumn("module_id");
  });
  await knex.schema.dropTableIfExists("course_module");
};
