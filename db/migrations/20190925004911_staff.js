exports.up = async knex => {
  await knex.schema.createTable("staff", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("user_id").unsigned();
    t.foreign("user_id").references("user.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.table("staff", async t => {
    t.dropForeign("user_id");
    t.dropColumn("user_id");
  });
  await knex.schema.dropTableIfExists("staff");
};
