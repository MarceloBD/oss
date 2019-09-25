exports.up = async knex => {
  await knex.schema.createTable("material_target_audience", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("material_id").unsigned();
    t.foreign("material_id").references("material.id");

    t.integer("target_audience_id").unsigned();
    t.foreign("target_audience_id").references("target_audience.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("material_target_audience", async t => {
    t.dropForeign("material_id");
    t.dropColumn("material_id");

    t.dropForeign("target_audience_id");
    t.dropColumn("target_audience_id");
  });
  await knex.schema.dropTableIfExists("material_target_audience");
};
