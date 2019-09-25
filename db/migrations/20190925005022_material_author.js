exports.up = async knex => {
  await knex.schema.createTable("material_author", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("material_id").unsigned();
    t.foreign("material_id").references("material.id");

    t.integer("author_id").unsigned();
    t.foreign("author_id").references("author.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("material_author", async t => {
    t.dropForeign("material_id");
    t.dropColumn("material_id");

    t.dropForeign("author_id");
    t.dropColumn("author_id");
  });
  await knex.schema.dropTableIfExists("material_author");
};
