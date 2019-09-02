exports.up = async function(knex) {
  await knex.schema.createTable("login_token", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("enrollment_id").unsigned();
    t.foreign("enrollment_id").references("enrollment.id");

    t.string("token", 64)
      .unique()
      .notNull();
    t.timestamp("expiration_date").notNull();

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("login_token", async t => {
    await t.dropForeign("enrollment_id");
    await t.dropColumn("enrollment_id");
  });
  await knex.schema.dropTableIfExists("login_token");
};
