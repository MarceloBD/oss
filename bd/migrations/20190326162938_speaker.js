exports.up = async function(knex) {
  await knex.schema.createTable("speaker", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").unique();
    t.text("description");

    t.integer("resource_id").unsigned();
    t.foreign("resource_id").references("resource.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("speaker", async t => {
    await t.dropForeign("resource_id");
    await t.dropColumn("resource_id");
  });
  await knex.schema.dropTableIfExists("speaker");
};
