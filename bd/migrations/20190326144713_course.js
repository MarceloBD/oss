exports.up = async function(knex, Promise) {
  await knex.schema.createTable("course", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("name").notNullable();
    t.string("description");

    t.string("product_id");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists("course");
};
