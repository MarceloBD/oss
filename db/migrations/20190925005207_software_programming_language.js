exports.up = async knex => {
  await knex.schema.createTable("software_programming_language", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("software_id").unsigned();
    t.foreign("software_id").references("software.id");

    t.integer("programming_language_id").unsigned();
    t.foreign("programming_language_id").references("programming_language.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("software_programming_language", async t => {
    t.dropForeign("software_id");
    t.dropColumn("software_id");

    t.dropForeign("programming_language_id");
    t.dropColumn("programming_language_id");
  });
  await knex.schema.dropTableIfExists("software_programming_language");
};
