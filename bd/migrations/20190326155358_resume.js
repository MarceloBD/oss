exports.up = async function(knex) {
  await knex.schema.createTable("resume", function(t) {
    t.increments("id")
      .unsigned()
      .primary();

    t.text("title").notNull();
    t.text("raw").notNull();

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("resume");
};
