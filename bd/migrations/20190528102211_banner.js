exports.up = async function(knex) {
  await knex.schema.createTable("banner", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("course_id").unsigned();
    t.foreign("course_id").references("course.id");

    t.integer("resource_id").unsigned();
    t.foreign("resource_id").references("resource.id");

    t.string("title");
    t.text("description");

    t.string("button");
    t.text("link");

    t.timestamp("start_date").notNull();
    t.timestamp("end_date").notNull();

    t.boolean("active")
      .notNull()
      .defaultTo(true);
    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("banner", async t => {
    await t.dropForeign("course_id");
    await t.dropColumn("course_id");
  });
  await knex.schema.dropTableIfExists("banner");
};
