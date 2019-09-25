exports.up = async knex => {
  await knex.schema.createTable("software", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.string("platform");

    t.string("total_size_kb");

    t.boolean("active")
      .notNull()
      .defaultTo(true);

    t.timestamps(true, true);
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("software");
};
