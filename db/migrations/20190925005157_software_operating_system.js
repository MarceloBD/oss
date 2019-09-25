exports.up = async knex => {
  await knex.schema.createTable("software_operating_system", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("software_id").unsigned();
    t.foreign("software_id").references("software.id");

    t.integer("operating_system_id").unsigned();
    t.foreign("operating_system_id").references("operating_system.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("software_operating_system", async t => {
    t.dropForeign("software_id");
    t.dropColumn("software_id");

    t.dropForeign("operating_system_id");
    t.dropColumn("operating_system_id");
  });
  await knex.schema.dropTableIfExists("software_operating_system");
};
