exports.up = async function(knex) {
  await knex.schema.createTable("bill", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("enrollment_id").unsigned();
    t.foreign("enrollment_id").references("enrollment.id");

    t.string("external_id").notNull();

    t.string("status").notNull();
    t.timestamp("due_date").notNull();
    t.timestamp("issue_date").notNull();

    t.boolean("active")
      .notNull()
      .defaultTo(true);
    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("bill", async t => {
    await t.dropForeign("enrollment_id");
    await t.dropColumn("enrollment_id");
  });
  await knex.schema.dropTableIfExists("bill");
};
