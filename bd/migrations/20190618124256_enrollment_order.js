exports.up = async function(knex) {
  await knex.schema.createTable("enrollment_order", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.integer("enrollment_id").unsigned();
    t.foreign("enrollment_id").references("enrollment.id");

    t.integer("order_id").unsigned();
    t.foreign("order_id").references("order.id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.table("enrollment_order", async t => {
    t.dropForeign("enrollment_id");
    t.dropColumn("enrollment_id");

    t.dropForeign("order_id");
    t.dropColumn("order_id");
  });
  await knex.schema.dropTableIfExists("enrollment_order");
};
