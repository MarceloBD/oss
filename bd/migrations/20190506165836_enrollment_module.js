exports.up = async function(knex) {
  await knex.schema.createTable("enrollment_module", async function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("enrollment_id").unsigned();
    t.foreign("enrollment_id").references("enrollment.id");

    t.integer("module_id").unsigned();
    t.foreign("module_id").references("module.id");

    t.timestamp("start");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("enrollment_module", async t => {
    await t.dropColumn("enrollment_id");

    await t.dropForeign("module_id");
    await t.dropColumn("module_id");
  });
  await knex.schema.dropTableIfExists("enrollment_module");
};
