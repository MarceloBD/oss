exports.up = async function(knex) {
  await knex.schema.createTable("professor", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.text("description");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("professor", async t => {
    await t.dropForeign("user_id");
    await t.dropColumn("user_id");
  });
  await knex.schema.dropTableIfExists("professor");
};
