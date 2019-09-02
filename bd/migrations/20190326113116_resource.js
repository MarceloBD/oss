exports.up = async function(knex) {
  await knex.schema.createTable("resource", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("repository_id").unsigned();
    t.foreign("repository_id").references("repository.id");

    t.string("key");
    t.string("name");
    t.string("link");
    t.string("type");
    t.integer("size");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("resource", async t => {
    await t.dropForeign("repository_id");
    await t.dropColumn("repository_id");
  });
  await knex.schema.dropTableIfExists("resource");
};
