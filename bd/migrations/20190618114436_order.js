exports.up = async function(knex) {
  await knex.schema.createTable("order", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("woo_order_id");
    t.string("bling_order_id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("order");
};
