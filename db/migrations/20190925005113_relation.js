exports.up = async knex => {
  await knex.schema.createTable("relation", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("material_from_id").unsigned();
    t.foreign("material_from_id").references("material.id");

    t.integer("material_to_id").unsigned();
    t.foreign("material_to_id").references("material.id");

    t.string("type").notNullable();

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("relation", async t => {
    t.dropForeign("material_from_id");
    t.dropColumn("material_from_id");

    t.dropForeign("material_to_id");
    t.dropColumn("material_to_id");
  });
  await knex.schema.dropTableIfExists("relation");
};
